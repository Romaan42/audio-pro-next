import checkUserLogin from "@/lib/checkLoginUser";
import connectDb from "@/lib/connectDb";
import Cart from "@/models/cartModel";
import Product from "@/models/productModel";

export const GET = async () => {
  try {
    await connectDb();
    const user = await checkUserLogin();
    if (!user) {
      return Response.json(
        { success: false, message: "please login first! " },
        { status: 404 },
      );
    }

    const cartItems = await Cart.find({ userId: user._id });
    const products = await Product.find();

    const addedCartItems = cartItems.map((val) => {
      const product = products.find(
        (p) => p._id.toString() === val.productId.toString(),
      );
      return {
        _id: val._id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        qty: val.qty,
      };
    });

    return Response.json({ success: true, cartItems: addedCartItems });
  } catch (error) {
    return Response.json(
      { success: false, message: "server error" },
      { status: 500 },
    );
  }
};
