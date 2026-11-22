const pool = require('../config/db');
async function getAllBooks() {
    const sql = `
        SELECT books.*, categories.name AS category_name 
        FROM books 
        LEFT JOIN categories ON books.category_id = categories.id
    `;
    const [rows] = await pool.query(sql);
    return rows;
}
module.exports = {
    getAllBooks
};