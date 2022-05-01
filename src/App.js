import React from 'react'
import CallbackRefComp from './Components/CallbackRefComp';
import RefForwording from './Components/RefForwording';
import RefToClassComp from './Components/RefToClassComp';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import RenderPropsDemoCounter from './Components/RenderPropsDemoCounter';

function App() {
  return (
    <div style={{margin: '20px'}}>
      {/* <h2>App Component is running</h2>
      <PortalDemo /> */}
       {/* <ErrorBoundary>
          <Hero name={'SuperMan'}/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero name={'Jocker'}/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero name={'BatMan'}/>
        </ErrorBoundary> */}

        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo></HoverCounterTwo> */}
        {/* <User render={(a,b)=> {
          return (
            <>
            {a } {b}<h2>sarthak vaidya</h2>
            </>
            
          )
        }}/> */}

        <RenderPropsDemoCounter render={(count, incrementCount)=>{ return <ClickCounterTwo count={count} incrementCount={incrementCount}/> }}/>
        <RenderPropsDemoCounter render={(count, incrementCount)=>{ return <HoverCounterTwo count={count} incrementCount={incrementCount}/> }}/>
      </div>
  )
}

export default App;