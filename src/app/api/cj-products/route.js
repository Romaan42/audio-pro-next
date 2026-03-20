import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetch(
      "https://developers.cjdropshipping.com/api2.0/v1/product/getCategory",
      {
        headers: {
          "CJ-Access-Token": process.env.CJ_API_KEY,
        },
      },
    );

    console.log(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
