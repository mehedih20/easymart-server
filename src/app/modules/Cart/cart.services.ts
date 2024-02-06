import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";

const addToCartInDb = async (userEmail: string, payload: TCart) => {
  const userEmailExists = await Cart.findOne({ userEmail });

  if (userEmailExists) {
    const result = await Cart.findOneAndUpdate(
      { userEmail },
      { $push: { cartItems: payload } },
      {
        new: true,
      }
    );
    return result;
  } else {
    const newCart = {
      userEmail,
      cartItems: [payload],
    };
    const result = await Cart.create(newCart);
    return result;
  }
};

const getCartFromDb = async (userEmail: string) => {
  const result = await Cart.findOne({ userEmail }).populate(
    "cartItems.productId"
  );
  return result;
};

const removeCartItemFromDb = async (userEmail: string, id: string) => {
  const result = await Cart.findOneAndUpdate(
    { userEmail },
    {
      $pull: {
        cartItems: {
          _id: id,
        },
      },
    },
    {
      new: true,
    }
  );

  return result;
};

const removeCartFromDb = async (userEmail: string) => {
  const result = await Cart.deleteOne({ userEmail });
  return result;
};

export { addToCartInDb, getCartFromDb, removeCartItemFromDb, removeCartFromDb };
