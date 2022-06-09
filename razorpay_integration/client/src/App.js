import React, { useState } from 'react'
import './App.css'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
const __DEV__ = document.domain === 'localhost'

function App() {
	const [name, setName] = useState("Sharan Dooganavar")

	async function handleRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' })
		   .then((t) =>t.json()
		)
		// console.log(data)
		const options = {
			key: __DEV__ ? 'rzp_test_jYawQnDvwClYIp' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Payment',
			description: 'Thank you for perceching. Please pay to us.',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name:"Sharan Dooganavar",
				email: "sharan.d1997@gmail.coom",
				phone_number: '8050926778'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
	return (
		<div className="App">
			<header className="App-header">
				<h2>Razor Pay Integration</h2>
        <div>
          <h1>payment page</h1>
        </div>
				<button onClick={handleRazorpay}>Make Payment</button>
			</header>
		</div>
	)
}

export default App
