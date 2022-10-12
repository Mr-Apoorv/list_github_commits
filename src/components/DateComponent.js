import React from "react";

const DateComponent = (props) => {
  let date = new Date(props.dateData);
  //   console.log(`date `, date);
  let hours = 0;
  if (date.getHours() < 13) {
    hours = date.getHours();
  } else {
    hours = date.getHours() - 12;
  }
  return (
    <>{`${date.toLocaleString("en-us", {
      month: "long",
    })} ${date.getDate()}, ${(hours < 10 ? "0" : "") + hours}:${
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    } ${date.getHours() < 12 ? "am" : "pm"}`}</>
  );
};

export default DateComponent;
