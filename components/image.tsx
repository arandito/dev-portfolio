import Image from 'next/image';
import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
}

const ResponsiveImage = ({ src, alt, width }: ResponsiveImageProps) => {
  return (
    <div style={{ width: `${width}px`, position: 'relative', aspectRatio: '1' }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default ResponsiveImage;