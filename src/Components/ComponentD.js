import React, { useContext } from "react";
import UserContext from "../Context";
import { ChannelContext } from "../Context";

function ComponentD(props) {
  const channel = useContext(ChannelContext);
  const usersDetail = useContext(UserContext);

  return (
    // <UserContext.Consumer>
    //   {(user) => {
    //     return (
    //       <ChannelContext.Consumer>
    //         {(channel) => {
    //           return (
    //             <>
    //               <h2>{user.firstName}</h2>
    //               <h2>{user.lastName}</h2>
    //               <h2>{user.job}</h2>
    //               Channel Name is : {channel}
    //             </>
    //           );
    //         }}
    //       </ChannelContext.Consumer>
    //     );
    //   }}
    // </UserContext.Consumer>
    <>
      <h2>{usersDetail.firstName}</h2>
      <h2>{usersDetail.lastName}</h2>
      <h2>{usersDetail.job}</h2>
      Channel Name is : {channel}
    </>
  );
}

export default ComponentD;
