import connectDb from "@/lib/connectDb";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (request) => {
  try {
    await connectDb();
    const webCookies = await cookies();
    const { email, password } = await request.json();
    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "please enter the email and password",
        },
        {
          status: 401,
        },
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { success: false, message: "user does't exist" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json(
        { success: false, message: "wrong password" },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { email: user.email, password: user.password },
      process.env.JWT_SECRET,
    );

    webCookies.set("userToken", token);

    return Response.json({ success: true, message: "login successful" });
  } catch (error) {
    return Response.json(
      { success: false, message: "server error" },
      { status: 500 },
    );
  }
};
