import React from "react";
import ComponentA from "./Components/ComponentA";
import Counter from "./Components/Counter";
import ReduxCounterApp from "./Components/ReduxCounterApp";
import ReduxIncrementCounter from "./Components/ReduxIncrementCounter";
import UserList from "./Components/UserList";
import UserContext, { ChannelContext } from "./Context";
import Calculator from "./Hooks/Calculator";
import ClickCounter from "./Hooks/ClickCounter";
import DemoComponent from "./Hooks/DemoComponent";
import Home from "./Hooks/Home";
import HoverCounter from "./Hooks/HoverCounter";
import Paragraph from "./Hooks/Paragraph";
import RefComponent from "./Hooks/RefComponent";
import TimerDemo from "./Hooks/TimerDemo";
import TitleComponet from "./Hooks/TitleComponet";
import UserReducerHookDemo from "./Hooks/UserReducerHookDemo";
import UserRefDemo from "./Hooks/UserRefDemo";
//import Counter from "./Hooks/Counter";

function App() {
  return (
    <>
      {/* <ReduxCounterApp /> */}
      <UserList />
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
      {/* <Calculator /> */}
      {/* <Paragraph name={"sarthak"} text={"Lets do something different"} />
      <Paragraph name={"sidhy"} text={"This is custom text"} />
      <Paragraph name={"rohit"} text={"Hello there"} /> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
