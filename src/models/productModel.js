import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // General Information
    title: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },

    // Media (Images)
    images: [
      {
        type: String, // Store the URL or file path of images
        required: true,
      },
    ],

    // Pricing
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    // Categorization
    category: {
      type: String,
      enum: ["Headphones", "Speakers", "Microphones", "Cables", "Accessories"],
      required: true,
    },
    tags: [String], // Array of strings like ['Wireless', 'New', 'Sale']

    reviews: [
      {
        name: { type: String },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true, // createdAt aur updatedAt automatically manage karega
  },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
