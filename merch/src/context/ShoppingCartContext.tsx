import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import unsplash from '../api/unsplash';
import ShoppingCart from '../components/ShoppingCart';
type ShoppingCartProvideProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  storeItems: any;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProvideProps) {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [storeItems, setstoreItems] = useState([]);
  const openCart = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getStoreItems();
  }, []);

  const getStoreItems = async () => {
    const response = await unsplash.get('/photos/random', {
      params: { count: 30 },
    });

    const results = response.data;
    const storeItems = results.map((img: any) => {
      return {
        id: img.id,
        name: img.user.username,
        imgUrl: img.urls.regular,
        price: img.downloads,
      };
    });
    setstoreItems(storeItems);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setcartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setcartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setcartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        storeItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
