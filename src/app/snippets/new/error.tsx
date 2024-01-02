"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="block w-full p-4 bg-red-400 border border-red-600 text-black">
      {error.message}
    </div>
  );
}
