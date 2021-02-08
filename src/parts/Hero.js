import React from 'react'
import 'assets/scss/style.scss';

import ImageHero from 'assets/images/hero-mern.jpg'
import flag from 'assets/icon/flag-mern.svg'
import camera from 'assets/icon/camera-mern.svg'
import location from 'assets/icon/location-mern.svg'
import Button from 'elements/button'
import LandingPage from 'json/LandingPage.json'
import { formatNumber } from 'Config/FormatNumber';

export default function Hero(props) {
    const showMostPick=(props)=>{
        window.scrollTo({
            // top : props.refMostPicked.current.offsetTop - 30,
            top : 100,
            behavior : 'smooth',
        });
    }
    return (
        <>
        <section className="hero-section container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-2" style={{width: 600}}>
                    <h1 className="h2 font-weight-bold mb-3 hero-font pt-5">Lupakan sejenak kesibukan harimu,
                    ayo berwisata bersama keluarga...</h1>
                    <p className="mb-4 font-weight-light text-gray-500">Nikmati liburanmu dan jadikan pengalaman besar bersama keluarga</p>
                    <Button className="btn py-2 px-4 mb-4" hasShadow isPrimary onclick={showMostPick}>Take a tour <i className="ml-2 fas fa-chevron-circle-right"/></Button>
                    <div className="row mt-5 mb-2">
                        <div className="col-auto mr-5">
                            <img style={{width : 30}} src={flag} alt={`${props.data.travelers} Travelers`} className="mb-2"/>
                            <h6>
                                {formatNumber(props.data.travelers)}{" "}<span className="font-weight-light text-gray-500"> travelers</span></h6>
                        </div>
                        <div className="col-auto mr-5">
                            <img style={{width : 30}} src={camera} alt={`${props.data.views}`} className="mb-2"/>
                            <h6>
                                {formatNumber(props.data.views)}{" "}<span className="font-weight-light text-gray-500"> view</span></h6>
                        </div>
                        <div className="col-auto mr-5">
                            <img style={{width : 30}} src={location} alt={`${props.data.cities}`} className="mb-2"/>
                            <h6>
                                {formatNumber(props.data.cities)}{" "}<span className="font-weight-light text-gray-500"> city</span></h6>
                        </div>
                    </div>
                </div>
                <div className=" col-auto mb-2 pr-3 d-md-none d-lg-block d-flex justify-content-center">
                    <img src={ImageHero} alt="" style={{width : 470, height : 350}}/>
                </div>
            </div>
        </section>
        </>
    )
}
