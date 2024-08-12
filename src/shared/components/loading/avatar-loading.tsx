import { LazyImage } from "@/shared/components";

export function AvatarLoading() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute size-32 animate-spin rounded-full border-y-4 border-purple-500"></div>
      <LazyImage
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="size-28 rounded-full"
      />
    </div>
  );
}
