const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let NganhXetTuyenSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    ten_nganh: String,
    chuyen_nganh: [{
        _id: mongoose.Schema.ObjectId,
        ten_chuyen_nganh: String
    }],
    to_hop_xet_tuyen: Array
});
const NganhXetTuyenModel = mongoose.model('nganh_xet_tuyens', NganhXetTuyenSchema);

//Export ra bảng với tên thi_sinhs
module.exports = NganhXetTuyenModel