import React,{Component} from "react";

import "./assets/scss/style.scss";

class App extends Component {
  render(){
    return(
      <>
         <div className="App">
         </div>
         <div className="jumbotron bg-dark-gray">
           <div className="container">
            <h2>jumbotron</h2>
            <h2 className="d-flex justify-content-end">jumbotron left</h2>
           </div>
         </div>
      </>
    )
  }
}

export default App;
