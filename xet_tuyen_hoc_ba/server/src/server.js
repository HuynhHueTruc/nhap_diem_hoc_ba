//Expressjs hỗ trợ các method HTTP và midleware tạo ra API 
const express = require('express')
const app = express()

//Khai báo để sử dụng async connectDB
const connectDB = require('./models/connection')
connectDB()

// parse request body as JSON
app.use(express.json({ extended: true }))

//Khai báo cổng 3000
const Port = process.env.Port || 3000
//Chạy server
app.listen(Port, () => {
  console.log('Web started')
})

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./public'))

//Cho phép Client truy cập đến
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const ThiSinh = require('../api/thi_sinh_api')
const NganhXetTuyen = require('../api/nganh_xet_tuyen_api')
const NganhTotNghiep = require('../api/nganh_tot_nghiep_api')
const Mon = require('../api/mon_api')
const Lop = require('../api/lop_api')
const HocLuc = require('../api/hoc_luc_api_')
const Diem = require('../api/diem_api')
const DangKy = require('../api/dang_ky_api')


//Thực thi các api 
app.use(ThiSinh)
app.use(NganhXetTuyen)
app.use(NganhTotNghiep)
app.use(Mon)
app.use(Lop)
app.use(HocLuc)
app.use(Diem)
app.use(DangKy)