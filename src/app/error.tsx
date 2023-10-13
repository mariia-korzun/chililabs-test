'use client';

type IProps = {
  error: Error;
};

export default function ErrorWrapper({ error }: IProps) {
  return <h1 className="mt-20 text-xl font-bold">Oops!!! {error.message}</h1>;
}
