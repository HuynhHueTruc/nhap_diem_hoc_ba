// xử dụng module mongoose để kết nối 
const mongoose = require('mongoose')

const URI = `mongodb://localhost:27017/Xet_Tuyen_Hoc_Ba`
//Bất đồng bộ có nghĩa là sẽ hoàn thành sau, chứ không phải ngay lập tức và nó sẽ báo cho ta biết khi nó hoàn thành(hoặc bị lỗi).
//async giống như một lời hứa sẽ thực hiện yêu cầu sau await
const connectDB = async() => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true})
    console.log('MongoDB connected...')
}

// var url = 'mongodb+srv://daihoccantho:1234567890@xettuyenhocba.gtqw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// const connectDB = async() => {
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
// }
//Export ra connectDB
module.exports = connectDB