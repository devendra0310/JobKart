const mongoose=require('mongoose');

const jobSchema= new mongoose.Schema({
    companyName:{
        type:String,
        required: true
    },
    jobTitle:{
        type:String,
        required: true
    },
    companyLogo:{
        type:String,
    },
    minPrice:{
        type:String,
        required: true
    },
    maxPrice:{
        type:String,
        required: true
    },
    jobLocation:{
        type:String,
        required: true
    },
    postingDate:{
        type:Date,
        required: true
    },
    employmentType:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    postedBy:{
        type:String,
        required: true
    },
    skills:[
        {
            value:String,
            label:String
        }
    ]
})
module.exports=mongoose.model("Job",jobSchema);