import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(c => {
      const exists = c.find(x => x.id === product.id)
      if(exists) return c.map(x => x.id === product.id ? {...x, qty: x.qty + 1} : x)
      return [...c, {...product, qty: 1}]
    })
  }

  const updateQty = (productId, qty) => {
    setCart(c => c.map(p => p.id === productId ? {...p, qty} : p))
  }

  const remove = (productId) => {
    setCart(c => c.filter(p => p.id !== productId))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, remove, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}