import { programs } from '../content/content.js'

export default function Programs() {

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold">Programs</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <div id={p.id} key={p.id} className={`rounded-2xl border border-slate-200 p-6 ${p.color}`}>
            <div className="text-3xl" aria-hidden>{p.icon}</div>
            <div className="mt-3 text-lg font-semibold">{p.name}</div>
            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            {p.cta && (
              <a href={p.cta.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-teal-600 font-medium">{p.cta.label} →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


