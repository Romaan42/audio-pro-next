import connectDb from "@/lib/connectDb";
import Product from "@/models/productModel";

export const POST = async (request) => {
  try {
    await connectDb();
    const { productId, name, rating, comment } = await request.json();
    const product = await Product.findById(productId);
    if (!product) {
      return Response.json(
        { success: false, message: "product doesn't exist" },
        { status: 404 },
      );
    }

    product.reviews.push({
      name: name,
      rating: rating,
      comment: comment,
    });

    await product.save();

    return Response.json({ message: "Review added successfully" });
  } catch (error) {
    console.error("Error adding review:", error);
    return Response.json({ message: "Failed to add review" }, { status: 500 });
  }
};
