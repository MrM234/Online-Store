// import { useState } from 'react';
// import './CartPage.css';

// const INITIAL_ITEMS = [
//   { id: 1, name: 'Noise+ Pro Earbuds', variant: 'Midnight Black', price: 189, qty: 1, image: 'https://via.placeholder.com/400x300?text=Earbuds' },
//   { id: 2, name: 'MechBoard X Keyboard', variant: 'Arctic White', price: 159, qty: 2, image: 'https://via.placeholder.com/400x300?text=Keyboard' },
//   { id: 3, name: 'FocusCam 4K Webcam', variant: 'Graphite', price: 249, qty: 1, image: 'https://via.placeholder.com/400x300?text=Webcam' },
// ];

// export default function CartPanel() {
//   const [items, setItems] = useState(INITIAL_ITEMS);
//   const [promo, setPromo] = useState('');

//   const changeQty = (id, delta) => {
//     setItems(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
//   };

//   const removeItem = (id) => setItems(prev => prev.filter(item => item.id !== id));

//   const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="cart-panel">
//       <div className="cart-panel-header">
//         <span className="cart-panel-title">Your Cart</span>
//         <span className="cart-count-badge">{items.length}</span>
//         <button className="cart-close-btn">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="1" y1="1" x2="13" y2="13" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/><line x1="13" y1="1" x2="1" y2="13" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/></svg>
//         </button>
//       </div>
      
//       <div className="cart-items">
//         {items.map((item) => (
//           <div key={item.id} className="cart-item">
//             <div className="cart-item-img-wrap"><img src={item.image} className="cart-item-img" alt={item.name} /></div>
//             <div className="cart-item-info">
//               <div className="cart-item-top">
//                 <div>
//                   <div className="cart-item-name">{item.name}</div>
//                   <div className="cart-item-variant">{item.variant}</div>
//                 </div>
//                 <button className="cart-item-delete" onClick={() => removeItem(item.id)}>🗑️</button>
//               </div>
//               <div className="cart-item-bottom">
//                 <div className="qty-control">
//                   <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>-</button>
//                   <span className="qty-value">{item.qty}</span>
//                   <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
//                 </div>
//                 <span className="cart-item-price">${item.price * item.qty}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-promo">
//         <input className="cart-promo-input" placeholder="Promo code" value={promo} onChange={e => setPromo(e.target.value)} />
//       </div>

//       <div className="cart-summary-row">
//         <span className="cart-summary-label">Subtotal</span>
//         <span className="cart-summary-value">${subtotal}</span>
//       </div>
      
//       <button className="cart-checkout-btn">Checkout</button>
//     </div>
//   );
// }