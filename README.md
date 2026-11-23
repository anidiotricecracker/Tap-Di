Website Quản lý và Kinh doanh Sách Trực tuyến Tập ĐI

Dự án website bán sách trực tuyến xây dựng theo kiến trúc MVC, phục vụ học phần Phát triển ứng dụng Web.

1. Công nghệ sử dụng
Backend: Node.js, Express.js
Template Engine: Express-Handlebars (`.hbs`)
* **Frontend:** HTML5, CSS3 / SCSS, JavaScript
* **Database:** MySQL (`mysql2`)

2. Cấu trúc thư mục chính
`src/config/`: Cấu hình kết nối cơ sở dữ liệu MySQL.
`src/models/`: Xử lý truy vấn dữ liệu sách (`bookModel.js`).
`src/controllers/`: Điều hướng logic nghiệp vụ (`homeController.js`, `bookController.js`).
`src/views/`: Giao diện người dùng Handlebars (`layouts/`, `partials/`).
