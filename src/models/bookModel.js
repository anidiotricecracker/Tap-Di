// Truy vấn dữ liệu
const pool = require("../config/db");
async function getAllBooks() {
  const sql = `
        SELECT books.*, categories.name AS category_name 
        FROM books 
        LEFT JOIN categories ON books.category_id = categories.id
    `;
  const ketQua = await pool.query(sql);
  const rows = ketQua[0];
  return rows;
}
async function getBookById(id) {
  const sql = `
        SELECT books.*, categories.name AS category_name
        FROM books
        LEFT JOIN categories ON books.category_id = categories.id
        WHERE books.id = ?
    `;
  const ketQua = await pool.query(sql, [id]);
  const rows = ketQua[0];
  console.log(rows[0]);
  return rows[0];
}
module.exports = {
  getAllBooks,
  getBookById,
};
