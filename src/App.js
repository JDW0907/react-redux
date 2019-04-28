import React, { Component } from 'react';
import { connect } from "react-redux";
class App extends Component {
    render() {
      return (
        <div>
          <span id="value">{this.props.n}</span> 
          <div>
            <button id="add1" onClick={()=> this.props.add1()}>+1</button>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add1: ()=> dispatch({type:'add', payload: 1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

