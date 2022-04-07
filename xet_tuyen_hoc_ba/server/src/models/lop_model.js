const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let LopSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    lop: String,
    nam_hoc: String,
});
const LopModel = mongoose.model('lops', LopSchema);

//Export ra bảng với tên thi_sinhs
module.exports = LopModel