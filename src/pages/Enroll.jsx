import { useNavigate } from 'react-router-dom'

export default function Enroll() {
  const navigate = useNavigate()
  const plans = [
    {
      name: 'Level 0 – Think Like a Coder',
      price: 'R 950',
      period: 'per 8‑week term',
      features: ['Unplugged coding', 'Group games & puzzles', 'Weekly worksheets'],
      description: 'Screen‑free activities that build logic, creativity, and teamwork.'
    },
    {
      name: 'Level 1 – Play & Create',
      price: 'R 1 250',
      period: 'per 8‑week term',
      features: ['Scratch/mBlock visual coding', 'Project‑based learning', 'Showcase day'],
      description: 'Create interactive stories and games with visual coding tools.'
    },
    {
      name: 'Level 2 – Robots & Gadgets',
      price: 'R 1 650',
      period: 'per 8‑week term',
      features: ['Micro:bit/robots', 'Class hardware kits', 'Team challenges'],
      description: 'Hands‑on robotics and simple electronics to bring ideas to life.'
    },
  ]

  const proceedToPayment = (plan) => {
    localStorage.setItem('selectedProgram', JSON.stringify(plan))
    navigate('/payment')
  }

  const payments = [
    {
      name: 'PayPal',
      img: '/images/paypal.png',
      href: 'https://www.paypal.com/paypalme/your-handle',
      note: 'Secure international payments',
    },
    {
      name: 'PayFast',
      img: '/images/payfast.png',
      href: 'https://www.payfast.co.za/eng/process',
      note: 'Local SA payments',
    },
    {
      name: 'EFT (Bank Transfer)',
      img: '/images/eft.png',
      href: '#',
      note: 'We will send banking details via email',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Enroll & Payments</h1>
        <p className="mt-2 text-slate-600">Choose your program and pay securely. Need help? Email simphiwesipho55@gmail.com</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-3xl font-bold text-teal-600">{p.price}</div>
            <div className="text-slate-500 text-sm">{p.period}</div>
            <p className="mt-3 text-sm text-slate-700">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {p.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <button onClick={() => proceedToPayment(p)} className="mt-6 inline-block rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Proceed to Payment</button>
          </div>
        ))}
      </div>

      <div id="payments" className="mt-14">
        <h2 className="text-2xl font-semibold">Payment Methods</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {payments.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target={m.href.startsWith('http') ? '_blank' : undefined}
              rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow transition-shadow flex items-center gap-4"
            >
              <img src={m.img} alt={m.name} className="h-8 w-auto" />
              <div>
                <div className="font-medium">{m.name}</div>
                <div className="text-sm text-slate-600">{m.note}</div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">Replace the PayPal/PayFast links and add your images in <code>/images/</code>. EFT will be sent on request.</p>
      </div>
    </div>
  )
}


