import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const loadPayPal = (clientId) => {
  return new Promise((resolve, reject) => {
    if (window.paypal) return resolve(window.paypal)
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=ZAR`
    script.onload = () => resolve(window.paypal)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export default function Payment() {
  const navigate = useNavigate()
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [method, setMethod] = useState('paypal')
  const [paypalReady, setPaypalReady] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', province: '', postalCode: '', saveInfo: false,
  })

  useEffect(() => {
    const program = localStorage.getItem('selectedProgram')
    if (program) setSelectedProgram(JSON.parse(program))
    else navigate('/enroll')
  }, [navigate])

  useEffect(() => {
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID
    if (method === 'paypal' && clientId) {
      loadPayPal(clientId).then(() => setPaypalReady(true)).catch(() => setPaypalReady(false))
    }
  }, [method])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleRedirect = (url) => {
    window.open(url, '_blank')
    toast.info('Redirected to secure payment provider')
  }

  const onPayPalApprove = () => {
    toast.success('Payment processed successfully!')
    localStorage.removeItem('selectedProgram')
    setTimeout(() => navigate('/'), 1500)
  }

  if (!selectedProgram) return null

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Complete Your Enrollment</h1>
          <p className="text-slate-600 mt-2">Secure checkout • PayPal / Card / Instant EFT</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Your Details</h2>
            <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input name="address" value={formData.address} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <input name="city" value={formData.city} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Province</label>
                  <input name="province" value={formData.province} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Postal Code</label>
                  <input name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
                </div>
              </div>
            </form>

            <h2 className="text-xl font-semibold mt-8 mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer">
                <input type="radio" name="method" value="paypal" checked={method==='paypal'} onChange={()=>setMethod('paypal')} />
                <img src="/images/paypal.png" alt="PayPal" className="h-6" />
                <span className="text-sm text-slate-700">PayPal (Card/Wallet)</span>
              </label>
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer">
                <input type="radio" name="method" value="payfast" checked={method==='payfast'} onChange={()=>setMethod('payfast')} />
                <img src="/images/payfast.png" alt="PayFast" className="h-6" />
                <span className="text-sm text-slate-700">PayFast (Card/Instant EFT)</span>
              </label>
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer">
                <input type="radio" name="method" value="ozow" checked={method==='ozow'} onChange={()=>setMethod('ozow')} />
                <img src="/images/eft.png" alt="Ozow" className="h-6" />
                <span className="text-sm text-slate-700">Ozow Instant EFT</span>
              </label>
            </div>

            <div className="mt-6">
              {method === 'paypal' ? (
                import.meta.env.VITE_PAYPAL_CLIENT_ID ? (
                  <div id="paypal-buttons" className="">
                    {paypalReady && window.paypal && window.paypal.Buttons && window.paypal.Buttons({
                      style: { layout: 'horizontal', color: 'gold', shape: 'rect', label: 'paypal' },
                      createOrder: (data, actions) => {
                        return actions.order.create({
                          purchase_units: [{
                            amount: { value: selectedProgram.price.replace(/[^0-9.]/g, '') },
                            description: selectedProgram.name,
                          }],
                        })
                      },
                      onApprove: async (data, actions) => {
                        await actions.order.capture()
                        onPayPalApprove()
                      },
                    }).render('#paypal-buttons')}
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 text-sm">
                    Add VITE_PAYPAL_CLIENT_ID to your environment to enable PayPal Buttons.
                  </div>
                )
              ) : method === 'payfast' ? (
                <button onClick={() => handleRedirect('https://www.payfast.co.za/eng/process')} className="rounded-lg bg-teal-500 text-white px-6 py-3 font-semibold hover:bg-teal-600">Pay with PayFast</button>
              ) : (
                <button onClick={() => handleRedirect('https://www.ozow.com/')} className="rounded-lg bg-teal-500 text-white px-6 py-3 font-semibold hover:bg-teal-600">Pay with Ozow (EFT)</button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border-b border-slate-200 pb-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{selectedProgram.name}</h3>
                  <p className="text-sm text-slate-600">{selectedProgram.period}</p>
                </div>
                <span className="font-bold text-teal-600">{selectedProgram.price}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between"><span>Subtotal</span><span>{selectedProgram.price}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>R 0.00</span></div>
              <div className="flex justify-between text-lg font-bold border-t border-slate-200 pt-3"><span>Total</span><span>{selectedProgram.price}</span></div>
            </div>
            <p className="mt-4 text-xs text-slate-500">By continuing, you agree to our terms. This is a demo checkout; connect your real gateway credentials to accept live payments.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


