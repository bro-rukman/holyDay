import React from 'react'
// import {Card} from 'react-bootstrap'


export default function Partner(props) {
    // const renderImg=(props)=>{
    //     <Card >

    //     </Card>
    // }
    
    return (
        <>
        <section ref={props.refMostPicked} className="partner container mb-5">
            <h3 className="font-weight-bold mb-5">
                Partner Kami
            </h3>
        <div className="row">{props.data.map((item,index)=>{
            return(
                <div key={`partner-${index}`} className="col-3 d-flex align-items-center mb-5">
                    <div className="card mx-auto img-fluid img-thumbnail mx-auto">
                        <img src={item.imageUrl} alt={item.name}/>
                    </div>
                </div>
            )
        })}</div>
        {/* <div className="navbar">
            <ul className="navbar-collapse d-flex justify-content-end d-inline-block">
                <li className="col-2 nav-item px-auto " style={{width : 70}}>
                    <a href="" className="align-items-start">hello</a>
                </li>
                <li>
                    <a href="">hello1</a>
                </li>
            </ul>
        </div> */}
        </section>
        </>
    )
}
