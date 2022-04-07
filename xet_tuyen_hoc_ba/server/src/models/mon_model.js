const mongoose = require('mongoose')
//Tạo ra 1 khung schema dành cho đối tượng thi_sinh trên server khi trả về 
// Các đối tượng phải giống như trong mongoDB
let MonSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    ten_mon: String
});
const MonModel = mongoose.model('mons', MonSchema);

//Export ra bảng với tên thi_sinhs
module.exports = MonModel