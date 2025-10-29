import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="min-h-dvh flex flex-col font-sans text-slate-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="PlayCode Academy" className="h-10 w-10 object-contain" />
            <span className="text-lg font-semibold">PlayCode Academy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-teal-600">Home</a>
            <a href="/about" className="hover:text-teal-600">About</a>
            <a href="/programs" className="hover:text-teal-600">Programs</a>
            <a href="/parents" className="hover:text-teal-600">Parents</a>
            <a href="/contact" className="hover:text-teal-600">Contact</a>
          </nav>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-teal-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-teal-600 transition-colors">
            Join Our Classes
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/images/logo.png" alt="PlayCode Academy" className="h-8 w-8 object-contain" />
              <span className="font-semibold">PlayCode Academy</span>
            </div>
            <p className="text-slate-600">Play. Code. Think. Teaching children to solve problems through play and creativity.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-teal-600">About Us</a></li>
              <li><a href="/programs" className="hover:text-teal-600">Programs</a></li>
              <li><a href="/parents" className="hover:text-teal-600">For Parents</a></li>
              <li><a href="/contact" className="hover:text-teal-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-600">
              <li>📍 50 Dr Pixley Kaseme St, Durban, KZN</li>
              <li>📧 <a className="hover:text-teal-600" href="mailto:simphiwesipho55@gmail.com">simphiwesipho55@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} PlayCode Academy. All rights reserved.</div>
      </footer>

      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
