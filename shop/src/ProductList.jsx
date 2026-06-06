import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Помилка завантаження товарів:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Завантаження товарів...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Каталог товарів</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map(p => (
          <article key={p.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h3>
              <Link to={`/product/${p.id}`}>{p.title}</Link>
            </h3>
            <p>{p.description}</p>
            <div>Ціна: ${p.price}</div>
            <button 
              onClick={() => addToCart(p)} 
              disabled={p.stock <= 0}
              style={{ marginTop: '10px' }}
            >
              {p.stock > 0 ? 'Додати в кошик' : 'Немає в наявності'}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}