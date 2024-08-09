import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center">復習用</h2>
        <div className="mt-12 flex gap-y-7 gap-x-5">
          <Link className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block" href="/countUp">CountUp</Link>
        </div>
      </div>
    </div>
  );
}
