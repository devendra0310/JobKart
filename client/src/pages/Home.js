import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "../components/Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoad(true);
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/all-jobs");
        const data = await response.json();
        console.log(data);
        setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching the jobs:", error);
      }
    };
    fetchJobs();
    setIsLoad(false);
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // filter joby by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 
  );

  // radiobutton filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (curPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function for next page
  const nextPage = () => {
    if (curPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurPage(curPage + 1);
    }
  };

  // Function for previous page
  const prevPage = () => {
    if (curPage > 1) {
      setCurPage(curPage - 1);
    }
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          new Date(postingDate).toISOString().split('T')[0] >= selected ||
          jobLocation?.toLowerCase() === selected?.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType?.toLowerCase() === selected?.toLowerCase() ||
          employmentType?.toLowerCase() === selected?.toLowerCase()
      );
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-primary w-full mb-4">
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Content  */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left side  */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* Jobs Card  */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoad ? (
            <p className=" font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className=" text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No Data Found</p>
            </>
          )}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                className=" hover:underline"
                disabled={curPage === 1}
              >
                Previous
              </button>
              <span>
                Page {curPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                className=" hover:underline"
                disabled={
                  curPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right wside  */}
        <div className="bg-white p-4 rounded">
          <Newsletter/> 
        </div>

      </div>

      {/* footer  */}
      <div className="flex flex-col items-center gap-4 mt-4" >
        <div className="flex items-center gap-32" >
          <div className="flex flex-col gap-1" >
            <p className="font-bold text-xl" >JobKart</p>
            <p className="text-black/70" >Connecting Talent with Opportunities</p>
            <div className="flex gap-2 text-2xl">
            <Link to={"https://www.linkedin.com/in/devendra-singh-625783263/"} >
            <FaLinkedin className=" cursor-pointer"/>
            </Link>
            <Link to={"https://github.com/devendra0310"} >
            <FaGithub className=" cursor-pointer" />
            </Link>
            <Link to={"https://x.com/shekhawat0310"} >
            <FaTwitter className=" cursor-pointer" />
            </Link>
            </div>
          </div>

          <div className=" text-black/70 flex gap-3">
            <span>About Us</span>
            <span>Contact</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div className=" text-black/70" >@2024 JobKart, Inc. All Rights Reserved</div>
      </div>

    </div>
  );
};

export default Home;
