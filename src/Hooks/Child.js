import React from "react";
import Paragraph from "./Paragraph";

const Child = () => {
  console.log("Child running");
  return (
    <div>
      Child running
      <Paragraph />
    </div>
  );
};

export default React.memo(Child);
