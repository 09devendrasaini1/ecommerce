const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express();
app.use(express.json())             
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

const path = require('path')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))



const URI = process.env.MONGODB_URL;


mongoose.connect(URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Mongo Error:", err));
