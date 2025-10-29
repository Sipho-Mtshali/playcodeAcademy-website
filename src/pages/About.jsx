import { Target, Eye, HeartHandshake, UsersRound, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">About PlayCode Academy</h1>
          <p className="mt-4 text-center max-w-3xl mx-auto text-slate-200">
            Empowering young minds to think like coders before they ever touch a computer. We blend play,
            creativity, and teamwork to build problem solvers for tomorrow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="text-teal-600" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="mt-3 text-slate-700">
              Empower children to think logically, collaborate confidently, and express creativity through playful
              coding experiences that are inclusive and accessible.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Eye className="text-teal-600" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="mt-3 text-slate-700">
              A generation of diverse young people who see themselves as makers and problem solvers—ready to
              thrive in a technology‑powered world.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[{title:'Inclusive',icon:UsersRound,desc:'Welcoming kids from all backgrounds.'},{title:'Partnerships',icon:HeartHandshake,desc:'Built with schools and parents.'},{title:'Excellence',icon:Award,desc:'Quality, safety, and impact first.'},{title:'Growth',icon:TrendingUp,desc:'Scalable programs and outcomes.'}].map(({title,icon:Icon,desc})=> (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="text-teal-600" />
              <div className="mt-3 text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p>
              Founded by Sipho Mtshali, PlayCode Academy was created to make coding fun, inclusive, and meaningful
              for young children. We start screen‑free with unplugged activities, then introduce visual coding and
              simple robotics as curiosity grows.
            </p>
            <a href="/contact" className="inline-flex mt-4 rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Partner with Us</a>
          </div>
          <img src="/images/studentPlaying.png" alt="Children learning together" className="w-full rounded-2xl border border-slate-200" />
        </div>
      </section>
    </div>
  )
}


