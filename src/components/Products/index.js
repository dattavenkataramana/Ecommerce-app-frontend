// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './index.css';
// import { useProductContext } from '../CreateProductContext';

// const ProductPage = ({ selectedCategory, onSearch }) => {
//   const [products, setProducts] = useState([]);
//   const [searchFilterProducts, setSearchFilterProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { setCartItems } = useProductContext();  

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://dummyjson.com/products');
//         setProducts(response.data.products);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filteredProducts = products.filter(product =>
//       product.title.toLowerCase().includes(onSearch.toLowerCase())
//     );
//     setSearchFilterProducts(filteredProducts);
//   }, [products, onSearch]);

   
  

//   const handleAddToCart = (productId) => {
//     const productToAdd = products.find(product => product.id === productId);
//     console.log('Product to add:', productToAdd);  
//     if (productToAdd) {
//       setCartItems(prevCartItems => [...prevCartItems, productToAdd]);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="loader-container">
//         <h1>Loading.....</h1>
//       </div>
//     );
//   }

//   if (searchFilterProducts.length === 0) {
//     return (
//       <div className="not-found-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
//           alt="not-found"
//           className="not-found-img"
//         />
//       </div>
//     );
//   }

//   const filteredProductsData =
//     selectedCategory === 'All'
//       ? products
//       : products.filter(product => product.category === selectedCategory);

//   return (
//     <div className="product-page-container">
//       <h1>Products</h1>
//       <div className="products-grid">
//         {onSearch.trim() === '' ? (
//           filteredProductsData.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.thumbnail} alt={product.title} className="product-image" />
//               <div className="product-details">
//                 <h2 className="product-name">{product.title}</h2>
//                 <p className="product-description">{product.description}</p>
//                 <p className="product-price">${product.price}</p>
//                 <p className="product-rating">Rating: {product.rating}</p>
//                 {product.stock > 0 ? (
//                   <p className="product-stock">In Stock</p>
//                 ) : (
//                   <p className="product-out-of-stock">Out of Stock</p>
//                 )}

//                 <button className='button' onClick={() => handleAddToCart(product.id)} type='button'>Add to Cart</button>
//               </div>
//             </div>
//           ))                      
//         ) : (
//           searchFilterProducts.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.thumbnail} alt={product.title} className="product-image" />
//               <div className="product-details">
//                 <h2 className="product-name">{product.title}</h2>
//                 <p className="product-description">{product.description}</p>
//                 <p className="product-price">${product.price}</p>
//                 <p className="product-rating">Rating: {product.rating}</p>
//                 {product.stock > 0 ? (
//                   <p className="product-stock">In Stock</p>
//                 ) : (
//                   <p className="product-out-of-stock">Out of Stock</p>
//                 )}
//                 <button className='button' onClick={() => handleAddToCart(product.id)} type='button'>Add to Cart</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useProductContext } from '../CreateProductContext';

const ProductPage = ({ selectedCategory, onSearch }) => {
  const [products, setProducts] = useState([]);
  const [searchFilterProducts, setSearchFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setCartItems } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(onSearch.toLowerCase())
    );
    setSearchFilterProducts(filteredProducts);
  }, [products, onSearch]);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    console.log('Product to add:', productToAdd);
    if (productToAdd) {
      setCartItems(prevCartItems => [...prevCartItems, productToAdd]);
    }
  };

  // Remove product with ID 29 from filtered products
  const filteredProductsData =
    selectedCategory === 'All'
      ? products.filter(product => product.id !== 29)
      : products.filter(product => product.id !== 29 && product.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="loader-container">
        <h1>Loading.....</h1>
      </div>
    );
  }

  if (searchFilterProducts.length === 0) {
    return (
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not-found"
          className="not-found-img"
        />
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <h1>Products</h1>
      <div className="products-grid">
        {onSearch.trim() === '' ? (
          filteredProductsData.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-rating">Rating: {product.rating}</p>
                {product.stock > 0 ? (
                  <p className="product-stock">In Stock</p>
                ) : (
                  <p className="product-out-of-stock">Out of Stock</p>
                )}
                <button className='button' onClick={() => handleAddToCart(product.id)} type='button'>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          searchFilterProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-rating">Rating: {product.rating}</p>
                {product.stock > 0 ? (
                  <p className="product-stock">In Stock</p>
                ) : (
                  <p className="product-out-of-stock">Out of Stock</p>
                )}
                <button className='button bottom-button' onClick={() => handleAddToCart(product.id)} type='button'>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
