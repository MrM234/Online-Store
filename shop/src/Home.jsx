import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Smartphones', 'Laptops', 'Audio', 'Cameras', 'Accessories'];

  return (
    <div className="font-body bg-background min-w-0">
      {/* Навігацію варто винести в окремий компонент пізніше */}
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-secondary flex items-stretch overflow-hidden"
        style={{ minHeight: '580px' }}
      >
        <div className="flex-1 flex flex-col justify-center px-20 py-16 gap-6">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-muted rounded-xl px-4 py-2 text-xs text-muted-foreground font-medium w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
            <span>New arrivals just dropped</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-headings font-bold text-5xl text-foreground leading-tight"
            style={{ maxWidth: '520px' }}
          >
            Gadgets that move with you
          </motion.h1>
          
          <div className="flex gap-3 mt-2">
            <button className="bg-primary text-primary-foreground font-medium text-sm rounded-lg px-6 py-3">
              Shop Now
            </button>
          </div>
        </div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1"
        >
          <img src="https://via.placeholder.com/1200x800?text=Hero+Image" className="w-full h-full object-cover" alt="Hero" />
        </motion.div>
      </motion.section>

      {/* Розділ категорій з JS логікою */}
      <section className="px-20 pt-14 pb-2">
        <h2 className="font-headings font-bold text-2xl text-foreground mb-6">Browse by Category</h2>
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 rounded-xl border text-sm font-medium ${
                activeCategory === cat 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-background text-foreground border-border'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      <section
        className="w-full bg-secondary flex items-stretch overflow-hidden"
        style={{ minHeight: '580px' }}
      >
        <div className="flex-1 flex flex-col justify-center px-20 py-16 gap-6">
          <div className="inline-flex items-center gap-2 bg-muted rounded-xl px-4 py-2 text-xs text-muted-foreground font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
            <span>New arrivals just dropped</span>
          </div>
          <h1
            className="font-headings font-bold text-5xl text-foreground leading-tight"
            style={{ maxWidth: '520px' }}
          >
            <span>Gadgets that</span><br /><span>move with you</span>
          </h1>
          <p
            className="text-base text-muted-foreground font-body"
            style={{ maxWidth: '400px' }}
          >
            <span>Discover the latest smartphones, laptops, audio gear and accessories — curated for everyday life and beyond.</span>
          </p>
          <div className="flex gap-3 mt-2">
            <button className="bg-primary text-primary-foreground font-medium text-sm rounded-lg px-6 py-3">
              <span>Shop Now</span>
            </button>
            <button className="bg-background text-foreground font-medium text-sm rounded-lg px-6 py-3 border border-border">
              <span>View Deals</span>
            </button>
          </div>
        </div>
        <div
          className="relative flex-1 flex items-end justify-center overflow-hidden"
          style={{ minHeight: '580px' }}
        >
          <img
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            src="https://via.placeholder.com/1200x800?text=Hero+Banner"
            className="w-full h-full object-cover"
            alt="Hero Banner"
          />
        </div>
      </section>

      <div className="bg-background border-b border-border px-20 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-foreground flex-shrink-0">
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '20px', height: '20px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Secure Payments</div>
              <div className="text-xs text-muted-foreground">256-bit SSL encryption</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-foreground flex-shrink-0">
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '20px', height: '20px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
                    <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">30-Day Returns</div>
              <div className="text-xs text-muted-foreground">No questions asked</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-foreground flex-shrink-0">
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '20px', height: '20px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Free Shipping</div>
              <div className="text-xs text-muted-foreground">On orders over $50</div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-20 pt-14 pb-2">
        <h2 className="font-headings font-bold text-2xl text-foreground mb-6">Browse by Category</h2>
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium bg-primary text-primary-foreground border-primary">
            Smartphones
          </button>
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium bg-background text-foreground border-border">
            Laptops
          </button>
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium bg-background text-foreground border-border">
            Audio
          </button>
        </div>
      </section>

      <section className="px-20 pt-10 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headings font-bold text-2xl text-foreground">Featured Products</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-background rounded-lg border border-border flex flex-col overflow-hidden">
            <div className="relative bg-secondary flex items-center justify-center" style={{ height: '220px' }}>
              <img style={{ aspectRatio: '4/3', objectFit: 'cover' }} src="https://via.placeholder.com/800x600?text=Product+Image" className="w-full h-full object-cover" alt="Product" />
              <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium rounded-md px-2 py-1">Sale</span>
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1">
              <span className="text-xs text-muted-foreground font-medium">Laptops</span>
              <span className="text-base text-foreground font-semibold leading-snug">Galaxy Pro 15 Laptop</span>
              <div className="flex items-baseline gap-2 mt-auto pt-3">
                <span className="text-lg font-bold text-foreground">$1,299</span>
                <span className="text-sm text-muted-foreground line-through">$1,499</span>
              </div>
              <button className="mt-2 w-full bg-primary text-primary-foreground text-sm font-medium rounded-lg py-2">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary border-t border-border px-20 py-14 font-body">
        <div className="flex gap-16 mb-12">
          <div className="flex-1">
            <div className="font-headings font-bold text-xl text-foreground mb-3">TechStore</div>
            <p className="text-sm text-muted-foreground" style={{ maxWidth: '260px' }}>Your go-to destination for the latest electronics, gadgets, and accessories.</p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">© 2025 TechStore. All rights reserved.</span>
          <div className="flex gap-5">
            <span className="text-xs text-muted-foreground">Privacy Policy</span>
            <span className="text-xs text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}