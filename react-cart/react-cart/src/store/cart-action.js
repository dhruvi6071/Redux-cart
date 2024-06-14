import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cart-457ba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetcg cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "sent cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      //By this put method we can set the new incoming data.
      const response = await fetch(
        "https://cart-457ba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        //Here put method override the existing data.
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    await sendRequest();

    try {
      await dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "sent cart data failed",
        })
      );
    }
  };
};
