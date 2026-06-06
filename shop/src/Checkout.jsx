import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert('Кошик порожній')
      return
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    }

    try {
      await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      })
      clearCart()
      alert('Замовлення успішно оформлено')
      navigate('/')
    } catch (error) {
      alert('Помилка оформлення')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Оформлення замовлення</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Ім'я" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Адреса" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" required />
        <button type="submit">Підтвердити</button>
      </form>
    </div>
  )
}