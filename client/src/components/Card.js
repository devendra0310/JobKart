import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    jobLocation,
    employmentType,
    description,
    postingDate,
  } = data;
  const pdate=new Date(postingDate).toISOString().split('T')[0];
  return (
    <section className="card">
      <div className="flex gap-4 flex-col sm:flex-row items-start">
        <img width={100} height={100} src={companyLogo} alt=""></img>
        <div>
            <h4 className="text-primary mb-1" >{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2" >{jobTitle}</h3>
            <div className=" text-primary/70 text-base flex flex-wrap gap-2 mb-2" >
                <span className="flex items-center gap-2" ><CiLocationOn/>{jobLocation}</span>
                <span className="flex items-center gap-2" ><IoTimeOutline/>{employmentType}</span>
                <span className="flex items-center gap-2" >₹ {minPrice}-{maxPrice}</span>
                <span className="flex items-center gap-2" ><CiCalendarDate/>{pdate}</span>
            </div>

            <p className="text-base text-primary/70">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
