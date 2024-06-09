import { checkAuth, connectDB } from "../../../utils/features";
import { book } from "../../../models/book";
import { asyncError, errorHandler } from "../../../middlewares/error";

const handler = asyncError(async (req, res) => {
  await connectDB();
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login First");

  const taskId = req.query.id;

  const book = await book.findById(taskId);

  if (!book) return errorHandler(res, 404, "book not found");

  if (req.method === "PUT") {
    book.isCompleted = !book.isCompleted;

    await book.save();

    res.status(200).json({
      success: true,
      message: "book Updated Successfully",
    });
  } else if (req.method === "DELETE") {
    await book.deleteOne();

    res.status(200).json({
      success: true,
      message: "book Deleted Successfully",
    });
  } else {
    errorHandler(res, 400, "This method is not available");
  }
});

export default handler;
