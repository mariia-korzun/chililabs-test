import { Spinner } from '@/components';

export default function LoadingWrapper() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="mb-5 font-bold text-xl">Please wait, data is loading</h1>
      <Spinner />
    </div>
  );
}
