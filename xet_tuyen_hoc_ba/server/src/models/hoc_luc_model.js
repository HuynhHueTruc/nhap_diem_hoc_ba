const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let HocLucSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    hoc_luc: String,
});
const HocLucModel = mongoose.model('hoc_lucs', HocLucSchema);

//Export ra bảng với tên thi_sinhs
module.exports = HocLucModel