import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120027] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold text-center">
        Margaret Mead
      </h1>

      <p className="mt-4 text-lg text-white/80 text-center max-w-xl">
        Junior Full Stack Developer specialising in SaaS platforms,
        AI workflows, and secure application development.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="/Margaret-Mead-CV.pdf"
          className="rounded-full bg-blue-500 px-6 py-3 font-bold"
        >
          View CV
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-white/30 px-6 py-3 font-bold"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}