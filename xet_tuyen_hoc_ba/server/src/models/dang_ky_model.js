const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let DangKySchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    _id_thi_sinh: mongoose.Schema.ObjectId,
    ten_nganh: String,
    chuyen_nganh: [{
        _id: mongoose.Schema.ObjectId,
        ten_chuyen_nganh: String
    }],
});
const DangKyModel = mongoose.model('dang_kys', DangKySchema);

//Export ra bảng với tên thi_sinhs
module.exports = DangKyModel