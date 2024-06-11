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
    const sendCartData = async () => {
      //By this put method we can set the new incoming data.
      const response = await fetch(
        "https://cart-457ba-default-rtdb.asia-southeast1.firebasedatabase.app/",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if(!response.ok) {
        throw new Error('sending cart data failed');
      }


      const responseData = await response.json();
    };

    
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
