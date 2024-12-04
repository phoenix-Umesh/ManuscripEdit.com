import React from "react";
import "./VTcontent.css";

function VTcontent(props) {
  let data = props.data;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.country}</h4>
      <h5>{data.Status}</h5>
      {data.universities.split("=").map((detail,index) => (
        <p key={index} className="section__Jobs-detail">{detail}</p>
      ))}
    </div>
  );
}

export default VTcontent;