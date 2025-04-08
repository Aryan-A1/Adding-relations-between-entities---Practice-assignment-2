import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://img.pikbest.com/wp/202405/straps-stylish-yellow-background-showcasing-two-modern-black-and-white-smart-watches-with-designed-in-3d_9834970.jpg!bw700",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts => 
      prevProducts.map(product => {
        if (product.id === productId) {
          const currentAvgRating = product.avgRating;
          const currentTotalRatings = product.totalRatings;
          const newAvgRating = ((currentAvgRating * currentTotalRatings) + newRating) / (currentTotalRatings + 1);
          
          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: currentTotalRatings + 1
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1>Product Rating System</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
