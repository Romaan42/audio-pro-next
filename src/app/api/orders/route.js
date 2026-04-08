import checkUserLogin from "@/lib/checkLoginUser";
import connectDb from "@/lib/connectDb";
import Checkout from "@/models/checkoutModel";

export const GET = async () => {
  try {
    await connectDb();
    const user = await checkUserLogin();
    if (!user) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }
    const orders = await Checkout.find({ userId: user._id });
    return Response.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 },
    );
  }
};
