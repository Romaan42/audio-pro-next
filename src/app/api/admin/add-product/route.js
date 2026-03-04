import uploadOnCloud from "@/lib/cloudinary";
import connectDb from "@/lib/connectDb";
import Product from "@/models/productModel";

export const POST = async (request) => {
  try {
    await connectDb();
    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const category = formData.get("category");
    const tags = JSON.parse(formData.get("tags")); // stringify kiya tha client se
    const image = formData.get("image");

    let imageUrl;
    if (image) {
      const result = await uploadOnCloud(image);
      console.log(result);
      if (!result) {
        return Response.json(
          {
            error: "image uploaded failed",
          },
          {
            status: 401,
          },
        );
      }
      imageUrl = result.url;
    }

    await Product.create({
      title,
      description,
      price,
      stock,
      category,
      tags,
      images: [imageUrl],
    });

    return Response.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
};
