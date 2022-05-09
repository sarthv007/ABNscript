import React from "react";
import Child from "./Components2/Child";
import Content from "./Components2/Content";
import Footer from "./Components2/Footer";
import Header from "./Components2/Header";
import Parent from "./Components2/Parent";
import Root from "./Router/Root";

function App(props) {
  return (
    <>
      <div>
        {/* <Header />
        <Content />
        <Footer /> */}
        <Root />
      </div>
    </>
  );
}

export default App;
