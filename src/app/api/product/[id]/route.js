import connectDb from "@/lib/connectDb";
import Product from "@/models/productModel";

export const GET = async (_, { params }) => {
  const { id } = await params;
  try {
    await connectDb();
    const product = await Product.findById(id);

    if (!product) {
      return Response.json(
        { success: false, message: "product not found" },
        { status: 404 },
      );
    }

    return Response.json({ success: true, product }, { status: 201 });
  } catch (error) {
    return Response.json(
      { success: false, message: "somethind went wrong" },
      { status: 500 },
    );
  }
};
