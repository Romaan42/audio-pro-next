import Cart from "@/models/cartModel";

export const DELETE = async (_, { params }) => {
  const { id } = await params;
  try {
    await Cart.findByIdAndDelete(id);
    return Response.json({ success: true, message: "cart items was deleted" });
  } catch (error) {
    return Response.json(
      { success: false, message: "something went wrong" },
      { status: 500 },
    );
  }
};
