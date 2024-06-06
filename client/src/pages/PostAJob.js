import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { baseUrl } from "../baseUrl";

const PostAJob = () => {
    const [selectedOption,setSelectedOption]=useState(null);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  // const [formData, setFormData] = useState({
  //   jobTitle: '',
  //   companyName: '',
  //   description: '',
  //   jobLocation: '',
  //   minPrice: '',
  //   maxPrice : '',
  //   employmentType:'',
  //   postedBy:''
  // });

  async function onSubmit(data)  {
    data.skills=selectedOption;
    const isoDate = data.postingDate;
    console.log(isoDate);
    try{
      const response= await fetch(`${baseUrl}/post-job`,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")} 
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mv-b text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={"Apple"}
                {...register("companyName")} 
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                defaultValue={"100000"}
                {...register("minPrice")} 
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                defaultValue={"10000000"}
                {...register("maxPrice")} 
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employement Type</label>
              <select
                {...register("employmentType")} 
                className="create-job-input">
                    <option value="">Choose your employment type </option>
                    <option value="NoExperience">Full-Time</option>
                    <option value="Internship">Part-Time</option>
                    <option value="WorkRemotely">Temporary</option>
                </select>
            </div>
    
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                defaultValue={"Jaipur"}
                {...register("jobLocation")} 
                className="create-job-input" />
            </div>
          </div>

          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Posting Date</label>
              <input
                type="date"
                defaultValue={"03-10-2024"}
                {...register("postingDate")} 
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={"https://devnaukri.vercel.app/_next/static/media/company-logo-placeholder.5a0abc1e.svg"}
                {...register("companyLogo")} 
                className="create-job-input" />
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
          rows={6} placeholder="Job Description" {...register("description")} />
          </div>

          <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted By</label>
          <input
                type="email"
                defaultValue={"Your email"}
                {...register("postedBy")} 
                className="create-job-input" />
          </div>

          


          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
        </form>
      </div>
    </div>
  );
};

export default PostAJob;
