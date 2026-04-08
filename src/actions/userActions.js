"use server";
import jwt from "jsonwebtoken";
import connectDb from "@/lib/connectDb";
import Contact from "@/models/contactModel";
import { cookies } from "next/headers";

export const contactFormSubmit = async (_, formData) => {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  Contact.create({ name, email, message });

  return {
    success: true,
    message: "Your message has been received. We'll get back to you shortly!",
  };
};

export const logoutUser = async () => {
  await connectDb();
  const cookiesStore = await cookies();
  cookiesStore.delete("userToken");

  return { success: true, message: "user logout success" };
};

export const adminLogin = async (_, formData) => {
  const { email, password } = formData;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const cookiesStore = await cookies();
    cookiesStore.set("adminToken", token, { path: "/" });
    return { success: true, message: "Admin login successful" };
  } else {
    return { success: false, error: "Invalid email or password" };
  }
};

export const adminLogout = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("adminToken");
  return { success: true, message: "Admin logout successful" };
};
