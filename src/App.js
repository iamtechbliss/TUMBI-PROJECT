// src/App.js
import React from 'react';
import './App.css';
import productData from './productData';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <ProductionCollections />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <div className="logo">ShopLogo</div>
    <nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="auth-links">
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <img src="images/hero-image.jpg" alt="Hero" />
    <div className="hero-text">
      <h1>Welcome to Our Shop</h1>
      <p>Your one-stop solution for all your needs</p>
      <button>Shop Now</button>
    </div>
  </section>
);

const Products = () => (
  <section className="products">
    <h2>Our Products</h2>
    <div className="product-cards">
      {productData.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <button>Explore More</button>
        </div>
                                                                          
      ))}
    </div>
    <button className="show-more">Show More</button>
  </section>
);

const ProductionCollections = () => (
  <section className="production-collections">
    <section className="first">
    <h2>Production Collections</h2>
    <p>Choose from these combination collection of our products carefully selected by our company experts. </p> 
    <button className='explore-more'>Explore More</button>
    </section>
    <div className="collection-content">
      <div className="images">
        <img src="/images/products/product-image-99.png" alt="Collection 1" />
        <img src="images/products/product-image-100.jpeg" alt="Collection 2" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-column">
      <h3>ShopLogo</h3>
      <p>123 Main St, Anytown, USA</p>
      <p>(123) 456-7890</p>
    </div>
    <div className="footer-column">
      <h3>Navigation</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Help</h3>
      <ul>
        <li><a href="#payment">Payment Options</a></li>
        <li><a href="#returns">Returns</a></li>
        <li><a href="#privacy">Privacy Policies</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Newsletter</h3>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </footer>
);

export default App;
