const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');
const NganhTotNghiepModel = require('../src/models/nganh_tot_nghiep_model');


route.get('/nganhtotnghiep/thongtin', async (req, res) => {
    NganhTotNghiepModel.find({}).select({
        _id: 1,
        _id_thi_sinh: 1,
        ten_nganh: 1,
        chuyen_nganh: 1,
        ngay_tot_nghiep: 1
    }).exec((err, nganhtotnghieps) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ nganhtotnghieps })
        }
    })
})

route.post('/nganhtotnghiep/themmoi', async (req, res) => {
    _id = new ObjectID()
    _id_thi_sinh = req.body._id_thi_sinh;
    ten_nganh = req.body.ten_nganh;
    chuyen_nganh = res.body.chuyen_nganh;
    ngay_tot_nghiep = req.body.ngay_tot_nghiep

    NganhTotNghiepModel.create({
        _id: _id,
        _id_thi_sinh: _id_thi_sinh,
        ten_nganh: ten_nganh,
        chuyen_nganh: chuyen_nganh,
        ngay_tot_nghiep: ngay_tot_nghiep
    })
        .then(dt => {
            res.json(true)
        })
        .catch(err => {
            res.json(err)
        })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;