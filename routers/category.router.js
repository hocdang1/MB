const express = require('express');
const router = express.Router();

// Import các hàm xử lý từ controller
const { createCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/category.controller");

// Định nghĩa các route
router
  .route("/")
  .post(createCategory) // Tạo một danh mục mới
  .get(getCategories);  // Lấy danh sách tất cả các danh mục

router
  .route("/:id")
  .patch(updateCategory) // Cập nhật thông tin một danh mục
  .delete(deleteCategory); // Xóa một danh mục

module.exports = router;