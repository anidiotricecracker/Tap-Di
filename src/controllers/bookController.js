const bookModel = require("../models/bookModel");
const getBookDetail = async function (req, res) {
  try {
    const id = req.params.id;
    const book = await bookModel.getBookById(id);
    if (!book) {
      return res.status(404).send("Không tìm thấy cuốn sách này!");
    } else {
      res.render("bookDetail", { book });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi máy chủ");
  }
};
module.exports = {
  getBookDetail,
};
