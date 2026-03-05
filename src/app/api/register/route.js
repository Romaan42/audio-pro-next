import connectDb from "../../../lib/connectDb";
import User from "../../../models/userModel";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    // ensure database is connected
    await connectDb();

    const data = await request.json();
    const { name, email, password } = data;

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return new Response(JSON.stringify({ message: "User registered" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Registration error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
