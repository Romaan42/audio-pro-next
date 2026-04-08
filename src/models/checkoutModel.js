import mongoose from "mongoose";

const checkoutSchems = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId },
    name: String,
    email: String,
    phone: String,
    city: String,
    paymentMethod: { type: String, default: "Cash on Delivery" },
    items: [
      {
        _id: { type: mongoose.Schema.ObjectId },
        qty: { type: Number, default: 1 },
        price: { type: Number },
        title: { type: String },
        image: { type: String },
      },
    ],
    totalPrice: { type: Number },
    status: { type: String, default: "Processing" },
  },
  { timestamps: true },
);

const Checkout =
  mongoose.models.Checkout || mongoose.model("Checkout", checkoutSchems);
export default Checkout;
