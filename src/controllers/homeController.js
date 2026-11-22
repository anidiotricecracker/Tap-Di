const bookModel = require('../models/bookModel');
async function getHomePage(req, res) {
    try {
        const books = await bookModel.getAllBooks();
        res.render('home', { books });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi máy chủ');
    }
}
module.exports = {
    getHomePage
};