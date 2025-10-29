import { benefits, faqs } from '../content/content.js'

export default function Parents() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold">Why Choose PlayCode Academy?</h1>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {benefits.map((b) => (
          <li key={b} className="rounded-xl border border-slate-200 p-4">{b}</li>
        ))}
      </ul>
      <h2 className="mt-10 text-2xl font-semibold">FAQs</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
      <a href="/contact" className="inline-flex mt-8 rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Enroll Your Child</a>
    </div>
  )
}


