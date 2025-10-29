import { programs } from '../content/content.js'
import { Puzzle, Gamepad2, Bot } from 'lucide-react'

export default function Programs() {

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold">Programs</h1>
        <a href="/enroll" className="text-sm font-medium text-teal-600 hover:text-teal-700">Enroll Now →</a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <div id={p.id} key={p.id} className={`rounded-2xl border border-slate-200 p-6 ${p.color} shadow-sm`}>
            <div className="text-3xl" aria-hidden>
              {p.id === 'level-0' && <Puzzle className="text-teal-600" />}
              {p.id === 'level-1' && <Gamepad2 className="text-orange-500" />}
              {p.id === 'level-2' && <Bot className="text-blue-500" />}
            </div>
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


