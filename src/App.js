import React from "react";
import ComponentA from "./Components/ComponentA";
import Counter from "./Components/Counter";
import UserContext, { ChannelContext } from "./Context";
import Calculator from "./Hooks/Calculator";
import DemoComponent from "./Hooks/DemoComponent";
import RefComponent from "./Hooks/RefComponent";
import TimerDemo from "./Hooks/TimerDemo";
import TitleComponet from "./Hooks/TitleComponet";
import UserReducerHookDemo from "./Hooks/UserReducerHookDemo";
import UserRefDemo from "./Hooks/UserRefDemo";
//import Counter from "./Hooks/Counter";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <TitleComponet /> */}
      {/* <UserReducerHookDemo /> */}
      {/* <RefComponent /> */}
      {/* <UserRefDemo /> */}
      {/* <TimerDemo /> */}
      {/* <UserContext.Provider
        value={{ firstName: "sarthak", lastName: "vaidya", job: "developer" }}
      >
        <ChannelContext.Provider value={"React Trainning session"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DemoComponent /> */}
      <Calculator />
    </>
  );
}

export default App;
