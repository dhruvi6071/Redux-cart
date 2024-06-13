import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { response } from "express";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  //Because of this useSelector our function will always set new data.
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data',
      })
    );
      //By this put method we can set the new incoming data.
      await fetch(
        'https://cart-457ba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        //Here put method override the existing data.
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if(!response.ok){
        throw new Error('Sending cart data failed');
  
      }

      const responseData = await response.json();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'sent cart data successfully',
      })
      );

    };

    sendCartData().catch();
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
