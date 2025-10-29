import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { testimonials } from '../content/content.js'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
            >
              Play. <span className="text-teal-500">Code.</span> Think.
            </motion.h1>
            <p className="mt-4 text-lg text-slate-700">
              Teaching children to solve problems through play and creativity.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">
                Join Our Classes
              </Link>
              <Link to="/programs" className="rounded-full border border-slate-300 px-6 py-3 font-medium hover:border-teal-500 hover:text-teal-600">
                Explore Programs
              </Link>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src="/images/hero-illustration.png"
            alt="Children playing unplugged coding games"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Programs</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { level: 'Level 0', title: 'Think Like a Coder', desc: 'Unplugged coding, screen-free', color: 'bg-teal-50', link: '/programs#level-0' },
              { level: 'Level 1', title: 'Play & Create', desc: 'Visual coding with Scratch', color: 'bg-orange-50', link: '/programs#level-1' },
              { level: 'Level 2', title: 'Robots & Gadgets', desc: 'Micro:bit and simple robots', color: 'bg-blue-50', link: '/programs#level-2' },
            ].map((p) => (
              <motion.div key={p.level} whileHover={{ y: -4 }} className={`rounded-2xl border border-slate-200 p-6 ${p.color}`}>
                <div className="text-xs font-semibold text-slate-500">{p.level}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <Link to={p.link} className="mt-4 inline-block text-teal-600 font-medium">View details →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">What Parents Say</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((q, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6">
                <Quote className="text-teal-500" />
                <p className="mt-3 text-slate-700">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


