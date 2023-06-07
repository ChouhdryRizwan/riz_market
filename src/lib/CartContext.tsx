'use client';
import { ReactElement, createContext, useContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartState>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
});

export const useCart = () => useContext(CartContext);
type ChildrenType = { children?: ReactElement | ReactElement[] }
export const CartProvider: React.FC = ({ children }: ChildrenType): ReactElement => {
  const [cartItems, setCartItems] = useLocalStorageState<CartItem[]>('cart', {
    defaultValue: []
  });

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      return [...prevCartItems,{product}];
      // const existingCartItemIndex = prevCartItems.findIndex((item) => item.product.id === product.id);
      // if (existingCartItemIndex !== -1) {
      //   const updatedCartItems = [...prevCartItems];
      //   updatedCartItems[existingCartItemIndex].quantity += 1;
      //   return updatedCartItems;
      // } else {
      //   return [...prevCartItems, { product, quantity: 1 }];
      // }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value: CartState = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
