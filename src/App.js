import landingPage from "pages/landingPage";
import React,{Component} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'


import "./assets/scss/style.scss";

class App extends Component {
  render(){
    return(
      <>
         <Router>
           <Route path="/" component={landingPage}/>
         </Router>
      </>
    )
  }
}

export default App;
