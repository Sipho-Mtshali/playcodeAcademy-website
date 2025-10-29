export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/PCALogo.png" alt="PlayCode Academy" className="w-8 h-8 rounded" />
              <span className="text-xl font-bold">PlayCode Academy</span>
            </div>
            <p className="text-slate-300 mb-4">
              Play. Code. Think. Empowering children through playful coding, creativity, and teamwork.
            </p>
            <p className="text-sm text-slate-400">
              We partner with schools and parents to make early coding education inclusive and engaging.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/" className="text-slate-300 hover:text-teal-400 transition-colors">Home</a>
              <a href="/about" className="text-slate-300 hover:text-teal-400 transition-colors">About</a>
              <a href="/programs" className="text-slate-300 hover:text-teal-400 transition-colors">Programs</a>
              <a href="/parents" className="text-slate-300 hover:text-teal-400 transition-colors">Parents</a>
              <a href="/enroll" className="text-slate-300 hover:text-teal-400 transition-colors">Enroll</a>
              <a href="/contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>simphiwesipho55@gmail.com</p>
              <p>50 Dr Pixley Kaseme St</p>
              <p>Durban, KZN</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} PlayCode Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


