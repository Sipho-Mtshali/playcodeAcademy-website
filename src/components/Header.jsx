import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/PCALogo.png" alt="PlayCode Academy" className="w-10 h-10 rounded" />
            <span className="text-xl font-bold">PlayCode Academy</span>
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
            <Link to="/programs" className="hover:text-teal-400 transition-colors">Programs</Link>
            <Link to="/parents" className="hover:text-teal-400 transition-colors">Parents</Link>
            <Link to="/enroll" className="hover:text-teal-400 transition-colors">Enroll</Link>
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
              <Link to="/programs" className="hover:text-teal-400 transition-colors">Programs</Link>
              <Link to="/parents" className="hover:text-teal-400 transition-colors">Parents</Link>
              <Link to="/enroll" className="hover:text-teal-400 transition-colors">Enroll</Link>
              <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


