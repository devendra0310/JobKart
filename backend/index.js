const express=require('express');
// const cookieparser=require("cookie-parser");
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

require('dotenv').config();
const dbConnect=require('./config/dbConnect');
dbConnect();

// const PORT=process.env.PORT || 3000; 
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT} port`);
})

const Route=require('./routes/Route');
app.use('/',Route);

app.get('/',(req,res) => {
    res.send("Hello World ");
})
