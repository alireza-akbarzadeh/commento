'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import Image from 'next/image';
import { useRef } from 'react';
import MapGl, { MapRef, Marker } from 'react-map-gl';

import {
  mapStyleObject,
  markerDefaultOptions,
} from '@/shared/components/map/constants';
import { MapProps } from '@/shared/components/map/map-types';
import { cn } from '@/shared/utils';
import { MapBackButton } from './MapBackButton';
import { MapPin } from './MapPin';
import { MapSubmitForm } from './MapSubmitForm';

const Map = (props: MapProps) => {
  const {
    zoom: mapZoom,
    latitude,
    longitude,
    isShowSearch,
    searchProps,
    readOnly = false,
    readOnlyOnClick,
    addressInformation,
    markerProps,
    centerMode = false,
    nextStateDisabled,
    onNextStep,
    loading,
  } = props;
  const mapRef = useRef<MapRef>(null);

  return (
    <div className="flex size-full flex-col">
      <div className="relative z-10 flex-1">
        {readOnly && (
          <div
            className={cn('absolute inset-0 z-10 cursor-default', {
              'cursor-pointer': readOnly,
            })}
            onClick={() => {
              if (readOnlyOnClick) readOnlyOnClick();
            }}
          />
        )}
        <MapGl
          // cursor={cursor}
          initialViewState={{
            longitude: longitude || 51.338_191,
            latitude: latitude || 35.697_706,
            zoom: mapZoom || 14,
          }}
          mapStyle={mapStyleObject}
          mapboxAccessToken="need-to-fake-access-token"
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          // onClick={(event) => {
          //   if (!centerMode)
          //     changePosition({ lat: event.lngLat.lat, lng: event.lngLat.lng });
          // }}
          // onDragEnd={handleDragEnd}
          // onDragStart={() => handleDragStart()}
          {...(centerMode && { scrollZoom: { around: 'center' } })}
        >
          {!centerMode && (
            <Marker
              anchor="bottom"
              // should read this form server
              latitude={51.338_191}
              longitude={35.697_706}
            >
              <div className="cursor-pointer">
                <Image
                  alt="map"
                  height={markerProps?.height ?? markerDefaultOptions.height}
                  src={markerProps?.src ?? (markerDefaultOptions.src as string)}
                  width={markerProps?.width ?? markerDefaultOptions.width}
                />
              </div>
            </Marker>
          )}
        </MapGl>
        {!readOnly && <MapBackButton />}
        {centerMode && !readOnly && <MapPin markerProps={markerProps} />}
        {/* {!!onNavigationChanged && !readOnly && (
          <MapTargetIcon handleGeoLocation={handleGeoLocation} />
        )} */}
      </div>
      {!readOnly && (
        <MapSubmitForm
          {...{
            addressInformation,
            // handleChangeSearch,
            isShowSearch,
            loading,
            nextStateDisabled,
            onNextStep,
            searchProps,
          }}
        />
      )}
    </div>
  );
};

export { Map };
