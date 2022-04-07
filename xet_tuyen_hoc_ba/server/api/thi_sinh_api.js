
const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
// var ObjectID = require('mongodb').ObjectID;
// var objectId = new ObjectID();
const { ObjectID } = require('bson');

var dateFormat = require('dateformat');
var now = new Date();
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
const ThiSinhModel = require('../src/models/thi_sinh_model')
const NganhTotNghiepModel = require('../src/models/nganh_tot_nghiep_model')
const DangKyModel = require('../src/models/dang_ky_model')
const DiemModel = require('../src/models/diem_model')

route.get('/thisinh/thongtin', async (req, res) => {
    ThiSinhModel.find({}).select({
        _id: 1,
        so_ho_so: 1,
        ho_ten: 1,
        ngay_sinh: 1,
        cmnd_cccd: 1,
        gioi_tinh: 1,
        dia_chi: 1,
        dan_toc: 1,
        noi_sinh: 1,
        dien_thoai: 1,
        email: 1,
        ngay_tao: 1,
        ngay_cap_nhat: 1
    }).exec((err, thisinhs) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ thisinhs })
        }
    })
})


route.post('/thisinh/themmoi', async (req, res) => {
    diem_so = []
    for (let i =0; i < 3; i++){
     diem_so.push({ toan: 0, vat_li: 0, hoa_hoc: 0, sinh_hoc: 0, ngu_van: 0, lich_su: 0, dia_li: 0, tieng_anh: 0, tieng_phap: 0, gdcd: 0, tdtt: 0, _id_hoc_luc: '' })
    }
    _id = new ObjectID(),
    so_ho_so = req.body.thi_sinh.so_ho_so,
    ho_ten = req.body.thi_sinh.ho_ten,
    ngay_sinh = req.body.thi_sinh.ngay_sinh,
    gioi_tinh = req.body.thi_sinh.gioi_tinh,
    cmnd_cccd = req.body.thi_sinh.cmnd_cccd,
    dia_chi = req.body.thi_sinh.dia_chi,
    dan_toc = req.body.thi_sinh.dan_toc,
    noi_sinh = req.body.thi_sinh.noi_sinh,
    dien_thoai = req.body.thi_sinh.dien_thoai,
    email = req.body.thi_sinh.email,
    ten_nganh = req.body.nganh_tot_nghiep.ten_nganh,
    chuyen_nganh = req.body.nganh_tot_nghiep.chuyen_nganh,
    // ngay_tot_nghiep = req.body.nganh_tot_nghiep.ngay_tot_nghiep,
    ten_nganh_dang_ky = req.body.dang_ky.ten_nganh,
    chuyen_nganh_dang_ky = req.body.dang_ky.chuyen_nganh,
    ngay_tao = dateFormat(),
    ngay_cap_nhat = dateFormat()

    ThiSinhModel.findOne({
        so_ho_so: so_ho_so
    })
        .then(data => {
            if (data) {
                res.json(false);
            } else {
                // Kiểm tra email đã tồn tại chưa
                // ThiSinhModel.findOne({
                //     email: email
                // })
                //     .then(data => {
                //         if (data) {
                //             res.json('Email thí sinh này đã tồn tại!');
                //         } else {
                            ThiSinhModel.create({
                                _id: _id,
                                so_ho_so: so_ho_so,
                                ho_ten: ho_ten,
                                ngay_sinh: ngay_sinh,
                                cmnd_cccd: cmnd_cccd,
                                dia_chi: dia_chi,
                                gioi_tinh: gioi_tinh,
                                dan_toc: dan_toc,
                                noi_sinh: noi_sinh,
                                dien_thoai: dien_thoai,
                                email: email,
                                ngay_tao: ngay_tao,
                                ngay_cap_nhat: ngay_cap_nhat,
                            })
                                .then(data => {
                                    NganhTotNghiepModel.create({
                                        _id: new ObjectID(),
                                        _id_thi_sinh: _id,
                                        ten_nganh: ten_nganh,
                                        chuyen_nganh: chuyen_nganh,
                                        // ngay_tot_nghiep: ngay_tot_nghiep
                                    })
                                        .then(dt => {
                                            DangKyModel.create({
                                                _id: new ObjectID(),
                                                _id_thi_sinh: _id,
                                                ten_nganh: ten_nganh_dang_ky,
                                                chuyen_nganh: chuyen_nganh_dang_ky,
                                            })
                                                .then(dt => {
                                                    DiemModel.create({
                                                        _id: new ObjectID(),
                                                        _id_thi_sinh: _id,
                                                        diem_so: diem_so,
                                                        diem_tot_nghiep: 0
                                                    })
                                                        .then(dt => {
                                                            res.json("Thêm thí sinh thành công!")
                                                        })
                                                        .catch(err => {
                                                            res.json(err)
                                                        })
                                                })
                                                .catch(err => {
                                                    res.json(err)
                                                })
                                        })
                                        .catch(err => {
                                            res.json(err)
                                        })
                                })
                    //     }
                    // })
                    .catch(err => {
                        res.status(500).json('Không lưu được thông tin thí sinh!')
                    });
            }
        })
})

route.delete('/thisinh/xoathisinh/:_id', async (req, res) => {
    _id = req.params._id;
    ThiSinhModel.deleteOne({
        _id: _id
    }).then(data => {
        if (data.deletedCount === 0) {
            res.json('Thí sinh này không tồn tại!');
        }
        else {
            DangKyModel.deleteOne({
                _id_thi_sinh: _id
            }).then(data => {
                DiemModel.deleteOne({
                    _id_thi_sinh: _id
                }).then(data => {
                    NganhTotNghiepModel.deleteOne({
                        _id_thi_sinh: _id
                    }).then(data => {
                        res.json('Xóa thí sinh thành công!');
                    }).catch(err => {
                        res.json({ message: error });
                    })
                }).catch(err => {
                    res.json({ message: error });
                })
            }).catch(err => {
                res.json({ message: error });
            })
        }
    }).catch(err => {
        res.json({ message: error });
    })
})
//Export biến route để server.js có thể gọi các api được viết
module.exports = route;
