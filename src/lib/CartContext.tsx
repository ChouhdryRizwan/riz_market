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
  ReducefromCart: (product: Product) => void;
};

const CartContext = createContext<CartState>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  ReducefromCart: () => { },
});

export const useCart = () => useContext(CartContext);
type ChildrenType = { children?: ReactElement | ReactElement[] }
export const CartProvider: React.FC = ({ children }: ChildrenType): ReactElement => {
  const [cartItems, setCartItems] = useLocalStorageState<CartItem[]>('cart', {
    defaultValue: []
  });

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex((item) => item.product._id === product._id);
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity + 1
        };
        return updatedCartItems;
      } else {
        return [...prevCartItems, { product, quantity: 1 }];
      }
    });
  };

  const ReducefromCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex((item) => item.product._id === product._id);
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        const updatedQuantity = updatedCartItems[existingCartItemIndex].quantity - 1;
        if (updatedQuantity > 0) {
          updatedCartItems[existingCartItemIndex] = {
            ...updatedCartItems[existingCartItemIndex],
            quantity: updatedQuantity
          };
        } else {
          updatedCartItems.splice(existingCartItemIndex, 1); // Remove the item from the array
        }
        return updatedCartItems;
      }
      return prevCartItems;
    });
  };


  const removeFromCart = (productId: string) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.product._id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value: CartState = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    ReducefromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
