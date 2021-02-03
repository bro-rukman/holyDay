import React,{Component} from "react";

import "./assets/scss/style.scss";

class App extends Component {
  render(){
    return(
      <>
      <aside>
      </aside>
         <div className="App">
         <div className="jumbotron bg-dark-gray">
           <div className="container">
        <div class="card d-flex justify-content-end">
          <img class="card-img-top rounded" src="" alt="img"/>
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
            <h2>jumbotron</h2>
            <h2 className="d-flex justify-content-end">jumbotron left</h2>
           </div>
         </div>
         </div>
      </>
    )
  }
}

export default App;
