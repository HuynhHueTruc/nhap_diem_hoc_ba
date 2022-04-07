const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');

const NganhXetTuyenModel = require('../src/models/nganh_xet_tuyen_model');

route.get('/nganhxettuyen/thongtin', async (req, res) => {
    NganhXetTuyenModel.find({}).select({
        _id: 1,
        ten_nganh: 1,
        chuyen_nganh: 1,
        to_hop_xet_tuyen: 1
    }).exec((err, nganhxettuyens) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ nganhxettuyens })
        }
    })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;