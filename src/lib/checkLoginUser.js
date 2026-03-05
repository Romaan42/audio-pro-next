import { cookies } from "next/headers";
import connectDb from "./connectDb";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

const checkUserLogin = async () => {
  const webCookies = await cookies();
  try {
    await connectDb();
    const token = webCookies.get("userToken")?.value;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return null;
    }

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
};

export default checkUserLogin;
