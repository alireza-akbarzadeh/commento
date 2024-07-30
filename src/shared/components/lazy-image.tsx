'use client';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useState } from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import { Skeleton } from '@/shared/ui';
import { cn } from '../utils';

export type LazyImageProps = LazyLoadImageProps & {
  quality?: number;
  imageNotFound?: string;
  isLocal?: boolean;
  fill?: boolean;
  skeletonClass?: string;
};

export const LazyImage = (props: LazyImageProps): JSX.Element => {
  const {
    width,
    height,
    src,
    quality = 75,
    onError,
    fill,
    skeletonClass,
    ...rest
  } = props;

  const [loading, setLoading] = useState<boolean>(true);

  const handleImageLoad = () => setLoading(false);

  return (
    <div
      style={{
        position: 'relative',
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
      }}
    >
      {loading && <Skeleton className={cn('size-full', skeletonClass)} />}
      <LazyLoadImage
        width={fill ? '100%' : width || ''}
        height={fill ? '100%' : height || ''}
        effect="blur"
        src={src}
        decoding="async"
        onLoad={handleImageLoad}
        onError={(event) => {
          setLoading(false);
          if (onError) {
            onError(event);
            return;
          }
        }}
        sizes="(max-width: 512px) 100vw"
        {...{
          quality,
          ...rest,
        }}
      />
    </div>
  );
};
