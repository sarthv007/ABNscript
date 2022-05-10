import React from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function Profile(props) {
  // const Api = axios.create({
  //   baseURL: "https://jsonplaceholder.typicode.com/posts",
  //   headers: {
  //     Authorization: "Bearer dnfksjdfksjhf", //the token is a variable which holds the token
  //   },
  // });
  let { elemtId } = useParams();

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((result) => {
    //     console.log("success");
    //     return result.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setPosts(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    //axios get method
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((result) => {
    //     console.log(result.data);
    //     setPosts(result.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //axios post method

    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT fefege...",
    };

    let data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", data, {
    //     headers: headers,
    //   })
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const getData = async () => {
    //   try {
    //     const result = await axios.get(
    //       "https://jsonplaceholder.typicode.com/psts"
    //     );
    //     console.log(result.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();

    const getData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        let response = await result.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  let list = posts.map((item) => <li key={item.id}>{item.title}</li>);
  return (
    <>
      <h1>Profile {elemtId}</h1>
      <ul>{list}</ul>
    </>
  );
}

export default Profile;
