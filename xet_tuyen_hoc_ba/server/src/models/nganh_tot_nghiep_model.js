const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let NganhTotNghiepSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    _id_thi_sinh: mongoose.Schema.ObjectId,
    ten_nganh: String,
    chuyen_nganh: String,
    ngay_tot_nghiep: Date
});
const NganhTotNghiepModel = mongoose.model('nganh_tot_nghieps', NganhTotNghiepSchema);

//Export ra bảng với tên thi_sinhs
module.exports = NganhTotNghiepModel