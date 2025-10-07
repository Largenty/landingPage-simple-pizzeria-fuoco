import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Pizza {
  name: string;
  desc: string;
  price: string;
  image: string;
}

export interface CartItem extends Pizza {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (pizza: Pizza) => void;
  removeItem: (pizzaName: string) => void;
  updateQuantity: (pizzaName: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (pizza) => {
        const items = get().items;
        const existingItem = items.find((item) => item.name === pizza.name);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.name === pizza.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...pizza, quantity: 1 }] });
        }
      },

      removeItem: (pizzaName) => {
        set({ items: get().items.filter((item) => item.name !== pizzaName) });
      },

      updateQuantity: (pizzaName, quantity) => {
        if (quantity <= 0) {
          get().removeItem(pizzaName);
        } else {
          set({
            items: get().items.map((item) =>
              item.name === pizzaName ? { ...item, quantity } : item
            ),
          });
        }
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = parseFloat(item.price.replace('€', ''));
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'pizzeria-cart',
    }
  )
);
