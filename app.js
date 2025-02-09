const express = require('express');
const app = express();
const connectDB = require('./configs/database.js');
const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

connectDB();
router(app);

app.listen(4000, ()=>{
    console.log("Sever run at port 4000");
})