import { LoadingDots } from '@/shared/components';

const Loading = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex h-dvh items-center justify-center">
        <LoadingDots />
      </div>
    </div>
  );
};
export default Loading;
