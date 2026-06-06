import { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './catalog.css';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="catalog-container">
      <div className="breadcrumb">Home / <span>All Products</span></div>
      
      <div className="catalog-header">
        <div>
          <h1 className="page-title">All Products</h1>
          <p className="product-count">320 products found</p>
        </div>
        <div className="sort-controls">
          <select className="sort-select">
            <option>Sort: Featured</option>
          </select>
          <button className="filter-btn">⚙</button>
        </div>
      </div>

      <div className="category-pills">
        <button className="pill active">All</button>
        <button className="pill">Smartphones</button>
        <button className="pill">Laptops</button>
        <button className="pill">Audio</button>
        <button className="pill">Cameras</button>
        <button className="pill">Accessories</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <span className="badge sale">Sale</span>
              <button className="wishlist-btn">♡</button>
              <img src={product.image || "https://dummyimage.com/300x200/e2e8f0/000"} alt={product.title} />
            </div>
            
            <div className="card-info">
              <span className="category-label">Laptops</span>
              <h3 className="product-title">{product.title}</h3>
              <div className="price-row">
                <span className="current-price">${product.price}</span>
                <span className="old-price">${product.price + 200}</span>
              </div>
              <button className="add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-num active">1</button>
        <button className="page-num">2</button>
        <button className="page-num">3</button>
        <button className="page-num">4</button>
        <button className="page-num">5</button>
        <button className="page-num arrow">&gt;</button>
      </div>
    </div>
  );
}