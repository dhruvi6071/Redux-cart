import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  //Because of this useSelector our function will always set new data.
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    
      //By this put method we can set the new incoming data.
      fetch(
        'https://cart-457ba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        //Here put method override the existing data.
        { method: 'PUT', body: JSON.stringify(cart) }
      );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
