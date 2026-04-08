import checkUserLogin from "@/lib/checkLoginUser";
import connectDb from "@/lib/connectDb";
import Cart from "@/models/cartModel";
import Checkout from "@/models/checkoutModel";

export const POST = async (req) => {
  try {
    await connectDb();

    const user = await checkUserLogin();
    if (!user) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { name, email, phone, city, address, items, totalPrice } =
      await req.json();

    const checkout = await Checkout.create({
      userId: user._id,
      name,
      email,
      phone,
      city,
      address,
      items,
      totalPrice,
    });

    await Cart.deleteMany({ userId: user._id });

    return Response.json(
      { success: true, message: "Checkout successful", orderId: checkout._id },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed to process checkout" },
      { status: 500 },
    );
  }
};
