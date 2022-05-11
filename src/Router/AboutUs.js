import React, { useState } from "react";

function AboutUs() {
  // const [name, setName] = useState("ABNSCript");
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(13.14);
  // const [flag, setFlag] = useState(true);
  // const [list, setList] = useState([10, 20, 30]);
  // const [person, setPerson] = useState({
  //   name: "sarthak",
  //   designation: "developer",
  //   lastName: "vaidya",
  // });

  const [state, setState] = useState({
    name: "ABNScript",
    count: 0,
    price: 13.14,
    flag: true,
    list: [10, 20, 30],
    person: {
      name: "sarthak",
      designation: "developer",
      lastName: "vaidya",
    },
  });

  const handleClick = () => {
    setState({
      ...state,
      name: "HCL",
      count: state.count + 1,
      price: 100.2,
      flag: true,
      list: [50, 30, 10],
      person: {
        ...state.person,
        lastName: "Joshi",
      },
    });
  };

  return (
    <>
      <h2>About our company {state.name}</h2>
      <h2>{state.count}</h2>
      <h2>{state.price}</h2>
      <h2>{state.flag}</h2>
      <h2>{state.list}</h2>
      <h2>
        {state.person.name} | {state.person.lastName}
      </h2>
      <br />
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default AboutUs;
