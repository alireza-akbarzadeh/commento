export function Throbbing() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative inline-flex">
        <div className="size-8 rounded-full bg-blue-500"></div>
        <div className="absolute left-0 top-0 size-8 animate-ping rounded-full bg-blue-500"></div>
        <div className="absolute left-0 top-0 size-8 animate-pulse rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
}
