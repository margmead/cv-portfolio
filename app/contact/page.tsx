export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#120027] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Contact
        </p>

        <h1 className="text-5xl font-extrabold">Let’s Connect</h1>

        <p className="mt-6 text-lg text-white/80">
          Thank you for viewing my Level 6 NZMAI portfolio. I would love to
          connect regarding junior full stack developer opportunities, SaaS
          product development, or AI workflow projects.
        </p>

        <div className="mt-10 space-y-4 text-lg text-white/80">
          <p>
            <strong>Email:</strong> muthrof1@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> 027 224 5212
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/margaret-mead-78b04634a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              View Profile
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/margmead"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              View Repositories
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}