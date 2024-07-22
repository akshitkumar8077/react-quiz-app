import React from "react";

const Question = ({ question }) => (
  <h5
    className="card-title"
    dangerouslySetInnerHTML={{ __html: question }}></h5>
);

export default Question;
