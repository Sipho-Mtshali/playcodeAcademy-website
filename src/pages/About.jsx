import { Target, Eye, HeartHandshake, UsersRound, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white text-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">About PlayCode Academy</h1>
          <p className="mt-4 text-center max-w-3xl mx-auto text-slate-700">
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
            At PlayCode Academy, our mission is to empower children to think critically, collaborate confidently, and express creativity through playful coding experiences.
            We believe that coding isn’t just about technology — it’s about problem-solving, teamwork, and imagination. Through inclusive, hands-on learning, we make coding accessible, fun, and meaningful for every child.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Eye className="text-teal-600" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="mt-3 text-slate-700">
            Our vision is to nurture a generation of curious, confident, and diverse young creators who see themselves as makers and problem solvers — ready to thrive in a technology-powered world.
We aim to build a global community where learning through play becomes the foundation for innovation, resilience, and lifelong curiosity.
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
            <h2 className="text-2xl font-semibold">🌟 Our Story</h2>
            <p>
              PlayCode Academy was co-founded by Sipho Mtshali and Mrs. L. Chamane out of a shared passion for giving every child — regardless of background — the chance to explore technology in a fun and meaningful way.<br></br><br></br>
              It all began with a simple observation: while many children enjoy using technology, very few understand how it works. Sipho and Mrs. Chamane envisioned a new kind of learning space — one that transforms coding into play, logic into creativity, and curiosity into innovation.<br></br><br></br>
              At PlayCode Academy, children as young as seven start with screen-free, hands-on coding games that spark imagination and teamwork. As they grow, we gently introduce visual coding platforms, robotics, and real-world problem-solving challenges, allowing each learner to progress confidently at their own pace.<br></br><br></br>
              Our approach builds more than just technical skills — it nurtures resilience, communication, and critical thinking. Parents love that their children are learning while playing; students love that it feels like fun, not schoolwork; and educators value the opportunity to partner with a program that develops future-ready learners.<br></br><br></br>
              Today, PlayCode Academy stands as more than a learning center — it’s a community shaping the next generation of innovators, thinkers, and leaders. With the right support from parents, sponsors, and schools, we’re empowering every child to say proudly:
              “I can think, create, and solve — because I learned through play.”
            </p>
            <a href="/contact" className="inline-flex mt-4 rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Partner with Us</a>
          </div>
          <img src="/images/studentOnBoard.png" alt="Children learning together" className="w-full rounded-2xl border border-slate-200" />
        </div>
      </section>
    </div>
  )
}


