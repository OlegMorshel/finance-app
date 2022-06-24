import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  alt: string;
  src?: string | null;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Picture: React.FC<Props> = ({ alt, src, className, height, width }) => {
  const checkIsImageCached = (srcImage?: string | null): boolean => {
    if (!srcImage) return false;
    const image = typeof window !== 'undefined' ? new Image() : { complete: false, src: '' };
    image.src = srcImage;
    return image.complete;
  };

  return (
    <LazyLoadImage
      effect={checkIsImageCached(src) ? undefined : 'blur'}
      src={src ?? ""}
      alt={alt}
      className={`${className}`}
      key={src}
      width={width}
      height={height}
    />
  );
};

export default Picture;
