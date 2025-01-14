import { checkAuth, connectDB } from "../../utils/features";
import { book } from "../../models/book";
import { asyncError, errorHandler } from "../../middlewares/error";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    return errorHandler(res, 400, "Please Enter All fields");

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 401, "Login First");

  await book.create({
    title,
    description,
    user: user._id,
  });

  res.json({
    success: true,
    message: "book Created",
  });
});

export default handler;
