import React from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
  let { elemtId } = useParams();
  //console.log("router params", params);
  return <div>Profile {elemtId}</div>;
}

export default Profile;
