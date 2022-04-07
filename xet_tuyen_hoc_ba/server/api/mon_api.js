const express = require('express')
const mongoose = require('mongoose')
//Khai báo biến chứa các hỗ trợ từ express
const route = express()
const { ObjectID } = require('bson');
const MonModel = require('../src/models/mon_model');


route.get('/mon/thongtin', async (req, res) => {
    MonModel.find({}).select({
        _id: 1,
        ten_mon: 1
    }).exec((err, mons) => {
        if (err) {
            res.json({
                result: "failed",
                data: [],
                message: `Error is: ${err}`
            })
        } else {
            //Trả về dạng JSON
            res.json({ mons })
        }
    })
})

//Export biến route để server.js có thể gọi các api được viết
module.exports = route;