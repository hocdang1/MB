const categoryModel = require("../models/category.model"); // Import model Category

// Export các hàm để thực hiện các thao tác CRUD
module.exports = {
  // Tạo một category mới
  createCategory: async (req, res) => {
    const newCategory = await categoryModel.create(req.body); // Tạo một category mới dựa trên dữ liệu gửi lên
    return res.status(201).json(newCategory); // Trả về thông tin category mới được tạo
  },

  // Lấy danh sách tất cả các categories
  getCategories: async (req, res) => {
    const categories = await categoryModel.find(); // Tìm tất cả các category
    return res.status(200).json(categories); // Trả về danh sách các category
  },

  // Cập nhật thông tin của một category
  updateCategory: async (req, res) => {
    const id = req.params.id; // Lấy ID của category cần cập nhật
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body, { new: true }); // Tìm và cập nhật category theo ID
    return res.status(200).json(updatedCategory); // Trả về thông tin category sau khi cập nhật
  },

  // Xóa một category
  deleteCategory: async (req, res) => {
    const id = req.params.id; // Lấy ID của category cần xóa
    const deletedCategory = await categoryModel.findByIdAndDelete(id); // Tìm và xóa category theo ID
    return res.status(200).json(deletedCategory); // Trả về thông tin category đã xóa (có thể là null)
  },
};