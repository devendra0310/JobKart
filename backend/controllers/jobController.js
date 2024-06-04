const Job=require('../models/Job');

exports.getAllJobs = async(req,res) =>{
    try{
        const jobs=await Job.find();
        return res.status(200).json({
            jobs
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in fetching all jobs"
        })

    }
}

exports.getJobById = async(req,res) =>{
    try{
        const id=req.params.id;
        const job=await Job.find({_id:id});
        return res.status(200).json({
            job
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in fetching jobs"
        })

    }
}

exports.createJob = async (req,res) => {
    try{
        console.log("first")
        const body=req.body;
        console.log(body.postingDate);
        const result=await Job.create(body);
        res.status(201).json({
        success: true,
        message: "Job created successfully",
        result,
      });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in creating job!", 
        });
    }
}

exports.getJobsByEmail = async(req,res) =>{
    try{
        const email=req.params.email;
        // const jobs=await Job.find({postedBy:email});
        const jobs=await Job.find();
        return res.status(200).json({
            jobs
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in fetching all jobs"
        })

    }
}

exports.deleteJobs = async(req,res) =>{
    try{
        const id=req.params.id; 
        const result=await Job.deleteOne({_id:id})
        console.log(result);
        return res.status(200).json({
            success:true,
            result
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error in deleting all jobs"
        })

    }
}

exports.updateJob = async(req,res) =>{
    try{
        const id=req.params.id; 
        let job=await Job.findById(id);
        if(!job){
            return res.status(500).json({
            success:false,
            message:"No Job Found"
            })
        }
        job = await Job.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json({
            success:true,
            message:"job updated successfully",
            job
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error in deleting all jobs"
        })

    }
}