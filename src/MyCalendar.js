import React, { useState } from "react";

import { Calendar } from "antd";

export default function MyCalendar(props) {
  const userData = props.userData;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [dateIs, setDateIs] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const getDate = (date) => {
    setDateIs(date._d.getDate());
    setMonth(date._d.getMonth());
    setYear(date._d.getYear() + 1900);
  };
  let bottomPanel = null;

  const showPanel = userData.activity_periods.findIndex(
    (obj) =>
      obj["start_time"].split(" ")[0] === months[month] &&
      parseInt(obj["start_time"].split(" ")[1]) === dateIs &&
      parseInt(obj["start_time"].split(" ")[2]) === year
  );

  if (showPanel > -1) {
    bottomPanel = (
      <div>
        <h3>{userData.real_name}</h3>
        <h3>
          Start Time :-
          {userData.activity_periods[showPanel].start_time.split(" ")[3]}
        </h3>
        <h3>
          End Time :-
          {userData.activity_periods[showPanel].end_time.split(" ")[3]}
        </h3>
      </div>
    );
  } else {
    bottomPanel = (
      <div>
        <h3>{userData.real_name} - Absent</h3>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onSelect={getDate} />
      </div>
      <div>{bottomPanel}</div>
    </div>
  );
}
