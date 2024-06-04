import React from "react";
import InputField from "../components/InputField";

const Salary = ({handleChange,handleClick}) => {
  return <div>
    <h4 className="text-lg font-medium mb-2" > Salary</h4>

    <div>
    <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          handleChange={handleChange}
          value={300000}
          title="< 300000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={500000}
          title="< 500000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={800000}
          title="< 800000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={1000000}
          title="< 1000000"
          name="test2"
        />
    </div>
  </div>;
};

export default Salary;
