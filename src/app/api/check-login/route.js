import checkUserLogin from "@/lib/checkLoginUser";

export const GET = async () => {
  try {
    const user = await checkUserLogin();

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "user doesn't logged in",
        },
        { status: 401 },
      );
    }

    return Response.json({ success: true, user });
  } catch (error) {
    return Response.json(
      { success: false, message: "server error" },
      { status: 500 },
    );
  }
};
