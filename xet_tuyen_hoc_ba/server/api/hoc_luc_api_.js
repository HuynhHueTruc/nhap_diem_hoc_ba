const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');
const HocLucModel = require('../src/models/hoc_luc_model');


route.get('/hocluc/thongtin', async (req, res) => {
    HocLucModel.find({}).select({
        _id: 1,
        hoc_luc: 1
    }).exec((err, hoclucs) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ hoclucs })
        }
    })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;