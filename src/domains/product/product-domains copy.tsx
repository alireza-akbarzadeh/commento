import { Map } from '@/shared/components/map';

export function ProductDomainCopy() {
  return (
    <div className="h-[124] overflow-hidden rounded-sm">
      <Map
        readOnly
        latitude={35.728_174_616_011_15}
        longitude={51.415_548_303_294_97}
      />
    </div>
  );
}
