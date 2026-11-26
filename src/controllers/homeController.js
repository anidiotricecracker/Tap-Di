// Điều phối Trang chủ
const bookModel = require('../models/bookModel');
const categoryModel = require('../models/categoryModel');
async function getHomePage(req, res) {
    try {
        const { category, keyword } = req.query;
        const [books, categories] = await Promise.all([
            bookModel.getAllBooks({ category, keyword }),
            categoryModel.getAllCategories()
        ]);
        res.render('home', {
            books,
            categories,
            currentKeyword: keyword || '',
            currentCategory: category || ''
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi máy chủ');
    }
}
module.exports = {
    getHomePage
};