import { cookies } from "next/headers";
import connectDb from "./connectDb";
import jwt from "jsonwebtoken";

const checkAdmin = async () => {
  try {
    const cookiesStore = await cookies();
    await connectDb();

    const adminToken = cookiesStore.get("adminToken")?.value;

    if (!adminToken) {
      return false;
    }

    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
    if (!decoded) {
      return false;
    }

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

export default checkAdmin;
