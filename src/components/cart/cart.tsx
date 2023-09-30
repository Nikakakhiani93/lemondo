'use client';

import { FC, createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
}

interface CartContextType {
  cartItem: CartItem[];
  ItemCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItem, setCart] = useState<CartItem[]>([]);
  const [ItemCount, setItemCount] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    setCart([...cartItem, item]);
    setItemCount(ItemCount + 1);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItem.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    setItemCount(ItemCount - 1);
  };

  return (
    <CartContext.Provider
      value={{ cartItem, ItemCount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Good luck mate for searching the solution <3');
  }
  return context;
};
