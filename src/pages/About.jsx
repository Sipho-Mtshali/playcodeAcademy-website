export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="prose prose-slate max-w-none">
          <p><strong>Founder story:</strong> Created by Sipho Mtshali to make coding fun and inclusive.</p>
          <p><strong>Mission:</strong> Empowering children to think like coders before they ever touch a computer.</p>
          <p><strong>Vision:</strong> A generation of problem solvers who code creatively.</p>
          <a href="/contact" className="inline-flex mt-4 rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Partner with Us</a>
        </div>
        <img src="/images/about-illustration.png" alt="Children learning together" className="w-full rounded-2xl border border-slate-200" />
      </div>
    </div>
  )
}


