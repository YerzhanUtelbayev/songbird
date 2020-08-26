import React, {
  useState, useEffect, FunctionComponent, useRef,
} from 'react';

import './Image.css';
import usePrevious from '../../../hooks/usePrevious';

interface Props {
  alt: string;
  thumb?: string;
  src: string;
}

const Image: FunctionComponent<Props> = ({ alt, thumb, src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const prevSource = usePrevious(src);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (src !== prevSource && !imageRef.current?.complete) {
      setIsLoaded(false);
    }
  }, [src, prevSource]);

  return (
    <>
      {thumb && (
        <img
          className="Image Image-thumbnail"
          alt={alt}
          src={thumb}
          style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
        />
      )}
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="Image Image-full"
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </>
  );
};

export default Image;
