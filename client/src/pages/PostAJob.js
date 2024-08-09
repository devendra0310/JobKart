import React, { useState } from "react";
import CreatableSelect from 'react-select/creatable';
import { baseUrl } from "../baseUrl";

const PostAJob = () => {
  const [selectedOption,setSelectedOption]=useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    description: '',
    jobLocation: '',
    companyLogo:'',
    minPrice: '',
    maxPrice : '',
    employmentType:'',
    postedBy:''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit()  {
    formData.skills=selectedOption;
    try{
      const response= await fetch(`${baseUrl}/post-job`,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(formData)
    });
    const result= await response.json();
    if(result.success===true)
      alert("Job created successfullt");
    }
    catch(error){
      console.log("error in posting");
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
        <div className="space-y-5" >

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" className="create-job-input" name="jobTitle" value={formData.jobTitle} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mv-b text-lg">Company Name</label>
              <input type="text" className="create-job-input" name="companyName" value={formData.companyName} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" className="create-job-input" name="minPrice" value={formData.minPrice} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" className="create-job-input" name="maxPrice" value={formData.maxPrice} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>
          </div>

          <div className="create-job-flex">

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employement Type</label>
              <select value={formData.employmentType} name="employmentType" onChange={changeHandler} className="create-job-input">
                  <option value="">Choose your employment type </option>
                  <option value="NoExperience">Full-Time</option>
                  <option value="Internship">Part-Time</option>
                  <option value="WorkRemotely">Temporary</option>
              </select>
            </div>
    
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" className="create-job-input" name="jobLocation" value={formData.jobLocation} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Posting Date</label>
              <input type="date" className="create-job-input" name="postingDate" value={formData.postingDate} onChange={(e) => { changeHandler(e) }}/>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" className="create-job-input" defaultValue={"https://devnaukri.vercel.app/_next/static/media/company-logo-placeholder.5a0abc1e.svg"} name="minPrice" value={formData.companyLogo} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
            </div>
         
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Required Skill Set</label>
              <CreatableSelect className="create-job-input py-4"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options} isMulti
              />
            </div>
          </div>

          <div className="create-job-flex">
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" 
          rows={6} placeholder="Job Description" name="description" value={formData.description} onChange={(e) => { changeHandler(e) }} />
          </div>

          <div className="w-full">
           <label className="block mb-2 text-lg">Job Posted By</label>
           <input type="email" className="create-job-input" name="postedBy" value={formData.postedBy} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
          </div>

          <button onClick={() => onSubmit()} className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
