const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
var ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
const DiemModel = require('../src/models/diem_model');
const DangKyModel = require('../src/models/dang_ky_model');


route.get('/diem/thongtin', async (req, res) => {
    DiemModel.find({}).select({
        _id: 1,
        _id_thi_sinh: 1,
        diem_so: 1,
        diem_tot_nghiep: 1,
    }).exec((err, diems) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ diems })
        }
    })
})

route.put('/diem/capnhat/:_id_thi_sinh', async (req, res) => {
    _id_thi_sinh = req.params._id_thi_sinh
    arr_tmp = [{ ten_chuyen_nganh: req.body.chuyen_nganh }]
    diem_so = req.body.diem
    // console.log(req.body.diem)
    // console.log(req.body.tab_title)
    // console.log(req.body.diem_tot_nghiep)

  
        if (diem_so.toan !== undefined) {
            diem_so.toan = Math.round(diem_so.toan * 100) / 100
        }
        if (diem_so.vat_li !== undefined) {
            diem_so.vat_li = Math.round(diem_so.vat_li * 100) / 100
        }
        if (diem_so.hoa_hoc !== undefined) {
            diem_so.hoa_hoc = Math.round(diem_so.hoa_hoc * 100) / 100
        }
        if (diem_so.sinh_hoc !== undefined) {
            diem_so.sinh_hoc = Math.round(diem_so.sinh_hoc * 100) / 100
        }
        if (diem_so.ngu_van !== undefined) {
            diem_so.ngu_van = Math.round(diem_so.ngu_van * 100) / 100
        }
        if (diem_so.lich_su !== undefined) {
            diem_so.lich_su = Math.round(diem_so.lich_su * 100) / 100
        }
        if (diem_so.dia_li !== undefined) {
            diem_so.dia_li = Math.round(diem_so.dia_li * 100) / 100
        }
        if (diem_so.tieng_anh !== undefined) {
            diem_so.tieng_anh = Math.round(diem_so.tieng_anh * 100) / 100
        }
        if (diem_so.tieng_phap !== undefined) {
            diem_so.tieng_phap = Math.round(diem_so.tieng_phap * 100) / 100
        }
        if (diem_so.gdcd !== undefined) {
            diem_so.gdcd = Math.round(diem_so.gdcd * 100) / 100
        }
        if (diem_so.tdtt !== undefined) {
            diem_so.tdtt = Math.round(diem_so.tdtt * 100) / 100
        }
    DiemModel.findOne({
        _id_thi_sinh: _id_thi_sinh
    }).then(data => {
        if (req.body.tab_title === 10){
            data.diem_so[0] = diem_so
        }else{
            if (req.body.tab_title === 11){
                data.diem_so[1] = diem_so
            }else{
                if (req.body.tab_title === 12){
                    data.diem_so[2] = diem_so
                } 
            } 
        }
        DiemModel.updateOne({
            _id_thi_sinh: _id_thi_sinh
        }, {
            diem_so: data.diem_so,
            diem_tot_nghiep:  Math.round(req.body.diem_tot_nghiep * 100) / 100
        })
            .then(data => {
                DangKyModel.findOne({
                    _id_thi_sinh: _id_thi_sinh
                }).then(data => {
                    if (data) {
                        DangKyModel.updateOne({
                            _id_thi_sinh: _id_thi_sinh
                        }, {
                            ten_nganh: req.body.nganh_xet_tuyen,
                            chuyen_nganh: arr_tmp
                        }).then(dt => {
                            res.json('Lưu điểm thành công!');
                        })
                            .catch(err => {
                                res.json(err)
                            })
                    } else {
                        res.json('Thí sinh này không tồn tại!');
                    }
                })
            })
            .catch(err => {
                res.status(500).json('Không lưu được điểm!')
            });
    }).catch(err => {
        console.log(err)
    })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;