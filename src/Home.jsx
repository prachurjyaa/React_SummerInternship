import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: '$29.99', category: 'Electronics' },
    { id: 2, name: 'Product 2', price: '$49.99', category: 'Fashion' },
    { id: 3, name: 'Product 3', price: '$39.99', category: 'Home' },
    { id: 4, name: 'Product 4', price: '$59.99', category: 'Electronics' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover quality products at great prices</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">📦</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>Safe and encrypted</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day money back</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-placeholder">
                <span>Image</span>
              </div>
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
              <Link to="/products" className="view-link">View Details →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of happy customers</p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary">Create Account</Link>
          <Link to="/signin" className="btn btn-secondary">Sign In</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
