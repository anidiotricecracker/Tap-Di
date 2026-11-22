CREATE DATABASE IF NOT EXISTS bookstore_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bookstore_db;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(150) NOT NULL,
    price DECIMAL(10, 0) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

INSERT INTO categories (name) VALUES 
('Công nghệ thông tin'),
('Văn học'),
('Kỹ năng sống');

INSERT INTO books (title, author, price, description, category_id) VALUES 
('Lập trình Web với Node.js & Express', 'Nguyễn Văn A', 150000, 'Giáo trình thực hành xây dựng ứng dụng web Fullstack.', 1),
('Nhà Giả Kim', 'Paulo Coelho', 79000, 'Hành trình theo đuổi vận mệnh của chàng chăn cừu Santiago.', 2),
('Đắc Nhân Tâm', 'Dale Carnegie', 86000, 'Nghệ thuật thu phục lòng người kinh điển.', 3),
('Sách chưa phân loại', 'Tác giả ẩn danh', 50000, 'Dùng để test chức năng LEFT JOIN khi category_id bị NULL.', NULL);
TRUNCATE TABLE books;
INSERT INTO books (title, author, price, description, category_id) VALUES 
('Lập trình Web với Node.js & Express', 'Nguyễn Văn A', 150000, 'Giáo trình thực hành xây dựng ứng dụng web Fullstack.', 1),
('Nhà Giả Kim', 'Paulo Coelho', 79000, 'Hành trình theo đuổi vận mệnh của chàng chăn cừu Santiago.', 2),
('Đắc Nhân Tâm', 'Dale Carnegie', 86000, 'Nghệ thuật thu phục lòng người kinh điển.', 3),
('Sách chưa phân loại', 'Tác giả ẩn danh', 50000, 'Dùng để test chức năng LEFT JOIN khi category_id bị NULL.', NULL);