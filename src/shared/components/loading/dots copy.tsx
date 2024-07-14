export function LoadingOvel() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative">
        <div className="size-24 rounded-full border-y-8 border-gray-200"></div>
        <div className="absolute left-0 top-0 size-24 animate-spin rounded-full border-y-8 border-blue-500"></div>
      </div>
    </div>
  );
}
