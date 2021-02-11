import React, { Component } from "react";
import LandingPage from 'json/LandingPage.json';
import Header from "parts/Header";
import Hero from 'parts/Hero';
import TempatPopuler from 'parts/TempatPopuler';
import Categories from "parts/Categories";
import Partner from "parts/Partner";
import Choose from "parts/Choose";
import Grid from "parts/Grid";
import Sidebar from "parts/Sidebar";


export default class landingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked=React.createRef();
  }
  render() {
    console.log('landingpage',this.props);
    return(
        <>
        {/* <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={LandingPage.hero}/>
        <TempatPopuler refMostPicked={this.refMostPicked} data={LandingPage.populer}/>
        <Categories refMostPicked={this.refMostPicked} data={LandingPage.categories} />
        <Partner refMostPicked={this.refMostPicked} data={LandingPage.partner}/>
        <Choose refMostPicked={this.refMostPicked} data={LandingPage.choose}/> */}
        {/* <Grid/> */}
        <Sidebar/>



        </>
    )
  }
}
