import React from "react";
import DateComponent from "./DateComponent";

const ListItem = (props) => {
  return (
    <div className="container my-3">
      <div className="list-group">
        {props.gitCommitsData.map((element, index) => {
          return (
            <div
              className="list-group-item list-group-item-action"
              aria-current="true"
              key={element.commit.author.date}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{element.commit.message}</h5>
              </div>
              <p className="mb-1">
                <small className="float">
                  <DateComponent dateData={element.commit.author.date} />
                </small>
                &nbsp; by {element.commit.author.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
