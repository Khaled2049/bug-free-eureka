import { createContext, ReactNode, useContext, useState } from 'react';

type ShoppingCartProvideProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProvideProps) {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
