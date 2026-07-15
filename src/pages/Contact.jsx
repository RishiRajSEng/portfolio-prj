import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm(prevForm => ({
			...prevForm,
			[name]: value
		}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		try {
			localStorage.setItem('contactForm', JSON.stringify(form))

			//alert('Message sent')

			toast.success('Message sent', {
				position: "top-right",
				autoClose: 5000,
			})
		} catch (err) {
			console.error('Failed to save contact form to localStorage:', err)
			toast.error('Failed to send message', {
				position: "top-right",
				autoClose: 5000,
			})
		}
		setForm({ name: '', email: '', subject: '', message: '' })
	}



	return (
		<section className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-20 text-slate-700">
			<div className="max-w-xl rounded-2xl bg-white px-8 py-10 text-center shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
				<p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#11d45b]">Contact</p>
				<h1 className="mt-4 text-4xl font-bold text-slate-900">Get in touch</h1>
				<form onSubmit={handleSubmit} className="mt-4 leading-8 text-slate-500">
					<input 
						type="text" 
						placeholder="Your Name" 
						className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:border-[#11d45b] focus:ring focus:ring-[#11d45b]/20" 
						name="name"
						value={form.name}
						onChange={handleChange}
						required
					/>
					<input 
						type="email" 
						placeholder="Your Email" 
						className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:border-[#11d45b] focus:ring focus:ring-[#11d45b]/20" 
						name="email"
						value={form.email}
						onChange={handleChange}
						required	
					/>
					<textarea 
						placeholder="Subject" 
						className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:border-[#11d45b] focus:ring focus:ring-[#11d45b]/20" 
						name="subject"
						value={form.subject}
						onChange={handleChange}
						required
					></textarea>
					<textarea 
						placeholder="Your Message" 
						className="mt-4 w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:border-[#11d45b] focus:ring focus:ring-[#11d45b]/20" 
						name="message"
						value={form.message}
						onChange={handleChange}
						required
					></textarea>
					<button 
						type="submit" 
						className="mt-4 w-full rounded-md bg-[#11d45b] px-4 py-2 font-semibold text-white hover:bg-[#0fa94a]"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
