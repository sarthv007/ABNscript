import React from 'react';

function HOCCounter(WrappedComponent) {
    class HOC extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
            this.incrementCount = this.incrementCount.bind(this);
        }  
            
        incrementCount(){
            this.setState((prevCount)=>({count: prevCount.count+1}));
        }

        render() {
          return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>;
        }
      }
      return HOC;
}

export default HOCCounter;