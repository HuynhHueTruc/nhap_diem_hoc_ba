const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let ThiSinhSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId, 
    so_ho_so: String,
    so_bao_danh: String,
    ho_ten: String,
    ngay_sinh: Date,
    cmnd_cccd: String,
    gioi_tinh: String,
    dan_toc: String,
    noi_sinh: [{
        xa_phuong: String,
        huyen_quan: String, 
        tinh_thanhpho: String
    }],
    dien_thoai: String,
    email: String,
    dia_chi: [{
        xa_phuong: String,
        huyen_quan: String, 
        tinh_thanhpho: String
    }], 
    ngay_tao: Date,
    ngay_cap_nhat: Date
});
const ThiSinhModel = mongoose.model('thi_sinhs', ThiSinhSchema);

//Export ra bảng với tên thi_sinhs
module.exports = ThiSinhModel