// Truy vấn dữ liệu - sách
const pool = require("../config/db");
async function getAllBooks(filters = {}) {
  let sql = `
    SELECT books.*, categories.name AS category_name 
    FROM books 
    LEFT JOIN categories ON books.category_id = categories.id 
    WHERE 1=1
  `;
  const params = [];
  if (filters.category) {
    sql += ` AND books.category_id = ?`;
    params.push(filters.category);
  }
  if (filters.keyword && filters.keyword.trim() !== "") {
    sql += ` AND books.title LIKE ?`;
    params.push(`%${filters.keyword.trim()}%`);
  }
  const ketQua = await pool.query(sql, params);
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
  return rows[0];
}
module.exports = {
  getAllBooks,
  getBookById,
};
