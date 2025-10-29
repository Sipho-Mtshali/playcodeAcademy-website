import { benefits, faqs } from '../content/content.js'
import { Smile, UsersRound, ShieldCheck, Lightbulb } from 'lucide-react'

export default function Parents() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold">Why Choose PlayCode Academy?</h1>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { text: benefits[0], Icon: Lightbulb },
          { text: benefits[1], Icon: ShieldCheck },
          { text: benefits[2], Icon: UsersRound },
          { text: benefits[3], Icon: Smile },
        ].map(({text, Icon}) => (
          <li key={text} className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm flex items-start gap-3">
            <Icon className="text-teal-600" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 text-2xl font-semibold">FAQs</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <a href="/enroll" className="inline-flex rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Enroll Your Child</a>
        <a href="/contact" className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-medium hover:border-teal-500 hover:text-teal-600">Talk to Us</a>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{kpi:'8-week',label:'program structure'},{kpi:'6–8 yrs',label:'ideal age range'},{kpi:'Screen‑free',label:'beginner friendly'},{kpi:'Teamwork',label:'confidence & collaboration'}].map(({kpi,label}) => (
          <div key={kpi} className="rounded-2xl border border-slate-200 p-6 bg-white text-center shadow-sm">
            <div className="text-2xl font-semibold text-teal-600">{kpi}</div>
            <div className="text-sm text-slate-600 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


