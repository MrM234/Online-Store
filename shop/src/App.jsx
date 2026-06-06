import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartProvider } from './CartContext'
import CartPage from './CartPage'
import Checkout from './Checkout'
import './App.css'
import Home from './Home'; 

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-root">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}