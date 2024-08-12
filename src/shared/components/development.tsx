import { LazyImage } from "./lazy-image";

export function Development(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white px-6 py-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold">Contribute View</h2>
        <p className="mb-8 text-center text-gray-700">
          This page is currently under development. Stay tuned!
        </p>
        <div className="flex justify-center">
          <LazyImage
            className="size-64 rounded-full object-cover object-center"
            src="/images/under_construction.svg"
            alt="Under Construction"
          />
        </div>
      </div>
    </div>
  );
}
