import React, { useState } from 'react'
import {useParams } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';


const UpdateJob = () => {
  const {id}=useParams();
  const [job,setJob]=useState();
  const fetchJob = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/my-job/${id}`
      );
      const data = await response.json();
      setJob(data.job[0]);
    } catch (error) {
      console.error("Error fetching the jobs:", error);
    }
  };
  fetchJob();

  const [selectedOption,setSelectedOption]=useState(null);

  async function onSubmit(data)  {
    console.log(data);
    data.skills=selectedOption;
    try{
      console.log(id)
      console.log(job._id);
      const response= await fetch(`http://localhost:3000/update-job/${id}`,{
      method:"PUT",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    });
    const result= await response.json();
    if(result.success===true)
      alert("Job Updated successfullt");
    }
    catch(error){
      console.log(error);
      console.log("error in updating");
    }
  };

  const options=[
    {value:"Javascript" ,label:"Javascript"},
    {value:"C++" ,label:"C++"},
    {value:"Java" ,label:"Java"},
    {value:"Python" ,label:"Python"},
    {value:"React" ,label:"React"},
    {value:"NodeJs" ,label:"NodeJs"},
  ]
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={job?.jobTitle}
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mv-b text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={job?.companyName}
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                defaultValue={job?.minPrice}
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                defaultValue={job?.maxPrice}
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                className="create-job-input">
                    <option value={job?.salaryType}>{job?.salaryType}</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                defaultValue={job?.jobLocation}
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Posting Date</label>
              <input
                type="date"
                defaultValue={job?.postingDate}
                className="create-job-input" />
            </div>

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                className="create-job-input">
                    <option value={job?.experienceLevel}>{job?.experienceLevel} </option>
                    <option value="NoExperience">No Experience</option>
                    <option value="Internship">Internship</option>
                    <option value="WorkRemotely">Work Remotely</option>
                </select>
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Required Skill Set</label>
              <CreatableSelect className="create-job-input py-4"
                defaultValue={job?.skills}
                onChange={setSelectedOption}
                options={options} isMulti
              />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={job?.companyLogo}
                className="create-job-input" />
            </div>

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employement Type</label>
              <select
                className="create-job-input">
                    <option value={job?.employmentType}>{job?.employmentType}</option>
                    <option value="NoExperience">Full-Time</option>
                    <option value="Internship">Part-Time</option>
                    <option value="WorkRemotely">Temporary</option>
                </select>
            </div>
          </div>

          <div className="create-job-flex">
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" 
          rows={6} placeholder="Job Description"
            defaultValue={job?.description}
          />
          </div>

          <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted By</label>
          <input
                type="email"
                defaultValue={job?.postedBy}
                className="create-job-input" />
          </div>

          


          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
        </form>
      </div>
    </div>
  )
}

export default UpdateJob