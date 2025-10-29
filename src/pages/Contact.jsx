import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Contact submission', data)
    toast.success('Thanks! We will contact you soon.')
    reset()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-600">We’re here to help with classes, partnerships, or general questions.</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <input {...register('parentName', { required: true })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" {...register('email', { required: true })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input {...register('phone')} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Child’s Name</label>
            <input {...register('childName', { required: true })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Child’s Age</label>
            <input type="number" {...register('childAge', { required: true, min: 4, max: 12 })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={4} {...register('message')} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
        </div>
          <button type="submit" className="mt-4 rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Send Message / Register</button>
        </form>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm flex gap-3">
              <Phone className="text-teal-600" />
              <div>
                <div className="text-lg font-semibold">Phone</div>
                <ul className="mt-2 text-slate-700 text-sm space-y-1">
                  <li>+27 76 362 7488</li>
                  <li>+27 73 578 7190</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm flex gap-3">
              <Mail className="text-teal-600" />
              <div>
                <div className="text-lg font-semibold">Email</div>
                <ul className="mt-2 text-slate-700 text-sm space-y-1">
                  <li>simphiwesipho55@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm flex gap-3 sm:col-span-2">
              <MapPin className="text-teal-600" />
              <div>
                <div className="text-lg font-semibold">Address</div>
                <ul className="mt-2 text-slate-700 text-sm space-y-1">
                  <li>50 Dr Pixley Kaseme St</li>
                  <li>Durban, KZN</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 aspect-video w-full rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">Google Map (optional)</div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Prefer quick enrollment?</h2>
            <a href="/enroll" className="mt-3 inline-flex rounded-full bg-teal-500 text-white px-6 py-3 font-medium hover:bg-teal-600">Go to Enroll & Payments</a>
          </div>
        </div>
      </div>
    </div>
  )
}


