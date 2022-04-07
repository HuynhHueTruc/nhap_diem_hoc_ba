const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');
const DangKyModel = require('../src/models/dang_ky_model');


route.get('/dangky/thongtin', async (req, res) => {
    DangKyModel.find({}).select({
        _id: 1,
        ten_nganh: 1,
        _id_thi_sinh: 1,
        chuyen_nganh: 1,
    }).exec((err, dangkys) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ dangkys })
        }
    })
})

route.post('/dangky/themmoi', async (req, res) => {
    ten_nganh = req.body.ten_nganh,
        _id_thi_sinh = new ObjectID(req.body._id_thi_sinh),
        chuyen_nganh = req.body.chuyen_nganh

    DangKyModel.create({
        _id: objectId,
        _id_thi_sinh: _id_thi_sinh,
        ten_nganh: ten_nganh,
        chuyen_nganh: chuyen_nganh
    })
        .then(data => {
            res.json('Lưu thông tin đăng ký thành công!');
        })
        .catch(err => {
            res.status(500).json('Không lưu được thông tin đăng ký!')
        });
})
//Export biến route để server.js có thể gọi các api được viết
module.exports = route;