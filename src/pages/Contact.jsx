import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Contact submission', data)
    toast.success('Thanks! We will contact you soon.')
    reset()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold">Contact / Registration</h1>
        <p className="mt-2 text-slate-600">Send a message or register your child. We’ll get back to you.</p>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>📍 50 Dr Pixley Kaseme St, Durban, KZN</li>
          <li>📧 <a className="hover:text-teal-600" href="mailto:simphiwesipho55@gmail.com">simphiwesipho55@gmail.com</a></li>
        </ul>
        <div className="mt-6 aspect-video w-full rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">Google Map (optional)</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 p-6 bg-white">
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
    </div>
  )
}


