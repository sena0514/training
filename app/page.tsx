import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center">復習用</h2>
        <div className="mt-12 flex gap-y-7 gap-x-5">
        <Link
            className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block bg-red-200"
            href="/countUp"
          >
            1.CountUp
          </Link>
          <Link
            className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block bg-yellow-200"
            href="/textChange"
          >
           2.Text On & Off
          </Link>
          <Link
            className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block bg-blue-200"
            href="/realTimeText"
          >
           3.Realtime Text
          </Link>
        </div>
      </div>
    </div>
  );
}
