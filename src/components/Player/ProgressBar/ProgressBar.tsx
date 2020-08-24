/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useState, useEffect, useRef, FunctionComponent,
} from 'react';

import './ProgressBar.css';

interface Props {
  duration: number;
  curTime: number;
  onTimeUpdate: (arg0: number) => void;
}

const ProgressBar: FunctionComponent<Props> = ({ duration, curTime, onTimeUpdate }) => {
  const [curPercentage, setPercentage] = useState<number>(0);
  const [isDragged, setDragged] = useState<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const getFormattedDuration = (durationValue: number): string => {
    const minutes = Math.floor(durationValue / 60);
    const seconds = `0${Math.floor(durationValue % 60)}`;
    const secondsFormatted = seconds.slice(-2);
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes.toString();
    const result = `${minutesFormatted}:${secondsFormatted}`;
    return result;
  };

  const getClickedTime = (pageX: number): number => {
    const clickPositionInPage = pageX;
    const bar = progressBarRef.current;
    if (!bar) return 0;

    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    const result = timePerPixel * clickPositionInBar;
    if (result >= 0 && result <= duration) {
      return timePerPixel * clickPositionInBar;
    }
    return 0;
  };

  const updateTimeOnMove = (event: MouseEvent) => {
    setDragged(true);
    onTimeUpdate(getClickedTime(event.pageX));
  };

  const handleTimeDrag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    onTimeUpdate(getClickedTime(event.pageX));

    const bar = progressBarRef.current;
    if (bar) {
      bar.addEventListener('mousemove', updateTimeOnMove);

      document.addEventListener('mouseup', () => {
        setDragged(false);
        bar.removeEventListener('mousemove', updateTimeOnMove);
      });
    }
  };

  const roundTo = (value: number, digits = 0): number => {
    const p = 10 ** digits;
    const e = 0.5 * Number.EPSILON * value;
    return Math.round((value + e) * p) / p;
  };

  useEffect(() => {
    const result = (curTime / duration) * 100;
    const percentage = roundTo(result, 2);
    if (percentage !== curPercentage) {
      setPercentage(percentage);
    }
  }, [curTime, duration, curPercentage]);

  return (
    <div className="ProgressBar">
      <div
        ref={progressBarRef}
        className="ProgressBar-progress"
        style={{
          background: `linear-gradient(to right, #0EB08C ${curPercentage - 1}%, grey 0)`,
        }}
        onMouseDown={handleTimeDrag}
      >
        <span
          className="ProgressBar-progress-knob"
          style={{ left: `${curPercentage}%`, transition: isDragged ? 'none' : '.2s linear' }}
        />
      </div>
      <div className="ProgressBar-time-box">
        <span className="ProgressBar-time">{getFormattedDuration(curTime)}</span>
        <span className="ProgressBar-time">{getFormattedDuration(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
