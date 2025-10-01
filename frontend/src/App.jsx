import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartModal from "./components/CartModal.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const changeQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = async () => {
    const items = cart.map(({ id, quantity }) => ({ id, quantity }));
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/checkout`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      }
    );
    const data = await response.json();
    console.log(data.msg);
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="app">
      <Header
        total={total}
        itemCount={itemCount}
        onCartOpen={() => setIsCartOpen(true)}
      />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <CartModal
        isOpen={isCartOpen}
        items={cart}
        total={total}
        onClose={() => setIsCartOpen(false)}
        onQuantityChange={changeQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={checkout}
      />
    </div>
  );
}

export default App;
