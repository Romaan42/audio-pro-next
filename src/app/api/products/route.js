import connectDb from "@/lib/connectDb";
import Product from "@/models/productModel";

export const GET = async () => {
  try {
    await connectDb();
    const products = await Product.find();
    return Response.json(products, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
};
