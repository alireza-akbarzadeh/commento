import { LoadingDots } from "@/shared/components";

const Loading = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="w-[512px] bg-white">
        <LoadingDots />
      </div>
    </div>
  );
};
export default Loading;
