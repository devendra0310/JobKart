import React from 'react'
import InputField from '../components/InputField'

const Posting = ({handleChange}) => {
    const now=new Date();
    const twentyFourHoursAgo=new Date(now-24*60*60*1000);
    const sevenDaysAgo=new Date(now-24*60*60*1000*7);
    const thirtyDaysAgo=new Date(now-24*60*60*1000*30);
    const twentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate= sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate= thirtyDaysAgo.toISOString().slice(0,10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All Time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 Hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  )
}

export default Posting