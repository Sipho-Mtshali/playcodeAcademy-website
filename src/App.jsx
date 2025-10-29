import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-dvh flex flex-col font-sans text-slate-800">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
