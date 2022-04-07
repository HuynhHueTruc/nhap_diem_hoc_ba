const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let DiemSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    _id_thi_sinh: mongoose.Schema.ObjectId,
    diem_tot_nghiep: Number,
    diem_so: [{
        toan: Number,
        vat_li: Number,
        hoa_hoc: Number,
        sinh_hoc: Number,
        ngu_van: Number,
        lich_su: Number,
        dia_li: Number,
        tieng_anh: Number,
        tieng_phap: Number,
        gdcd: Number,
        tdtt: Number,
        _id_hoc_luc: String,
    }]
});
const DiemModel = mongoose.model('diems', DiemSchema);

//Export ra bảng với tên thi_sinhs
module.exports = DiemModel