'use client';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useEffect, useState } from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import packageJSON from '../../../package.json';

const cdnUrl = process.env['NEXT_PUBLIC_CDN'];
const notFoundUrl = `${cdnUrl}/cdn/images/not-found.svg`;

export const LazyImage = (
  props: LazyLoadImageProps & {
    quality?: number;
    imageNotFound?: string;
    isLocal?: boolean;
    fill?: boolean;
  },
): JSX.Element => {
  const {
    width,
    height,
    src: srcProps,
    imageNotFound,
    quality = 75,
    isLocal,
    onError,
    fill,
    ...rest
  } = props;

  const handleSrc = (src: LazyLoadImageProps['src'], isLocal?: boolean) => {
    if (!src || src === 'null' || src === 'undefined')
      return imageNotFound || notFoundUrl;
    let returnedSrc = src;
    if (!isLocal) returnedSrc = `${cdnUrl}${returnedSrc}`;
    return returnedSrc;
  };

  const [src, setSrc] = useState(() => handleSrc(srcProps, isLocal));

  useEffect(() => {
    setSrc(() => handleSrc(srcProps, isLocal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srcProps, handleSrc]);

  const getSrc = () => {
    const width = typeof props.width === 'number' ? `&w=${props.width}` : '';
    const height = typeof props.height === 'number' ? `&h=${props.height}` : '';
    return `${src}?r=${packageJSON.version}&q=${quality}${width}${height}&wpq=1`;
  };

  return (
    <LazyLoadImage
      width={fill ? '100%' : width || ''}
      height={fill ? '100%' : height || ''}
      effect="blur"
      placeholderSrc={isLocal ? '' : '/svg/skeleton-image.svg'}
      src={getSrc()}
      decoding="async"
      onError={(event) => {
        if (onError) {
          onError(event);
          return;
        }
        setSrc(imageNotFound || notFoundUrl);
      }}
      sizes="(max-width: 512px) 100vw"
      {...{
        quality,
        ...rest,
      }}
    />
  );
};
