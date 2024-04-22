import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);


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

  return (
    <ProductContext.Provider value={{ products, isLoading, cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
