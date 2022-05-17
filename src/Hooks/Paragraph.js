import React from "react";

function Paragraph(props) {
  console.log("Paragraph running");

  return (
    <div>
      {props.text}| {props.name}
    </div>
  );
}

export default Paragraph;
