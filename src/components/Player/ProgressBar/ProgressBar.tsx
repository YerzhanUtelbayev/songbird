/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useState, FunctionComponent, useEffect, useRef,
} from 'react';
import moment from 'moment';

import './ProgressBar.css';

interface Props {
  duration: number;
  curTime: number;
  onTimeUpdate: (arg0: number) => void;
}

const ProgressBar: FunctionComponent<Props> = ({ duration, curTime, onTimeUpdate }) => {
  const [curPercentage, setPercentage] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const getFormattedDuration = (durationValue: number): string => {
    const momentDuration = moment.duration(durationValue, 'seconds').seconds();
    return moment(momentDuration, 'seconds').format('mm:ss');
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
    onTimeUpdate(getClickedTime(event.pageX));
  };

  const handleTimeDrag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    onTimeUpdate(getClickedTime(event.pageX));

    const bar = progressBarRef.current;
    if (bar) {
      bar.addEventListener('mousemove', updateTimeOnMove);

      document.addEventListener('mouseup', () => {
        bar.removeEventListener('mousemove', updateTimeOnMove);
      });
    }
  };

  useEffect(() => {
    const result = (curTime / duration) * 100;
    setPercentage(result);
  }, [curTime, duration]);

  return (
    <div className="ProgressBar">
      <span className="ProgressBar-time">{getFormattedDuration(curTime)}</span>
      <div
        ref={progressBarRef}
        className="ProgressBar-progress"
        style={{
          background: `linear-gradient(to right, #0EB08C ${curPercentage}%, grey 0)`,
        }}
        onMouseDown={handleTimeDrag}
      >
        <span className="ProgressBar-progress-knob" style={{ left: `${curPercentage - 2}%` }} />
      </div>
      <span className="ProgressBar-time">{getFormattedDuration(duration)}</span>
    </div>
  );
};

export default ProgressBar;
