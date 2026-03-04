import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 60000, // ⬅️ Prevent timeout issues
});

const uploadOnCloud = async (file, folder = "grocery") => {
  try {
    if (!file) {
      throw new Error("No file provided");
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert buffer to base64
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload using normal upload (more stable than upload_stream)
    const result = await cloudinary.uploader.upload(base64Image, {
      folder,
      resource_type: "auto",
      transformation: [
        { quality: "auto", fetch_format: "auto" }, // Auto optimize
      ],
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    throw error; // Important: don't return null silently
  }
};

export default uploadOnCloud;
