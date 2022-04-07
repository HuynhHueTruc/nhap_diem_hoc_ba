const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');
const LopModel = require('../src/models/lop_model');


route.get('/lop/thongtin', async (req, res) => {
    LopModel.find({}).select({
        _id: 1,
        lop: 1,
        nam_hoc: 1,
    }).exec((err, lops) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ lops })
        }
    })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;