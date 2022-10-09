import React from "react";

const DateComponent = (props) => {
  let date = new Date(props.dateData);
  //   console.log(`date `, date);
  return <>{date.getMonth() + " " + date.getDate() + " , "}</>;
};

export default DateComponent;
