const express=require('express');
const { createJob, getAllJobs, getJobsByEmail, deleteJobs, updateJob, getJobById } = require('../controllers/jobController');
const router=express.Router();

router.post("/post-job", createJob);
router.get("/all-jobs", getAllJobs);
router.get("/my-job/:id", getJobById);
router.get("/my-jobs/:email", getJobsByEmail);
router.delete("/delete-job/:id",deleteJobs)
router.put("/update-job/:id",updateJob)

module.exports=router;