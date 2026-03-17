import checkUserLogin from "@/lib/checkLoginUser";
import connectDb from "@/lib/connectDb";
import Cart from "@/models/cartModel";
import User from "@/models/userModel";

export const POST = async (request) => {
  try {
    await connectDb();
    const { id } = await request.json();

    const user = await checkUserLogin();
    if (!user) {
      return Response.json(
        { success: false, message: "please login first " },
        { status: 401 },
      );
    }
    const existCart = await Cart.findOne({ productId: id, userId: user._id });
    if (existCart) {
      return Response.json(
        { success: false, message: "item already added" },
        { status: 401 },
      );
    }
    await Cart.create({ productId: id, userId: user._id });
    return Response.json({ success: true, message: "added success" });
  } catch (error) {
    return Response.json(
      { success: false, message: "server Error" },
      { status: 500 },
    );
  }
};
