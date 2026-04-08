import checkAdmin from "@/lib/checkAdminLogin";
import connectDb from "@/lib/connectDb";
import Checkout from "@/models/checkoutModel";

export const GET = async (request) => {
  await connectDb();

  const admin = await checkAdmin();
  if (!admin) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = await Checkout.find().sort({ createdAt: -1 });
  return Response.json(orders);
};
