import React from 'react'
import 'assets/scss/style.scss'
import Button from 'elements/button';
import { formatNumber } from 'Config/FormatNumber';



export default function TempatPopuler(props) {
    return (
        <>
        <section ref={props.refMospicked} className="tempat-populer container">
                <h3 className=" font-weight-bold mb-5">
                    Tempat Populer
                </h3>
                <div className="container-grid" >{props.data.map((item,index) => {
                        return(
                            <div key={`populer-${index}`} className={`item column-4 d-none d-md-block ${index === 0 ? "row-2" : "row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag px-2">Rp{" "}
                                        {formatNumber(item.price)}
                                        <span className="font-weight-light">/{item.unit}</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img className="img-cover" src={item.imageUrl} alt={item.name} />
                                    <div className="meta-wrapper">
                                        <Button type="link" hasShadow className="streched-link d-block pl-3 btn-text" href={`/properties/${item._id}`}>{item.name}</Button>
                                        <span className="span">{item.city},{item.country}</span>
                                    </div>
                                    </figure>
                                </div>
                            </div>
                            );
                        })}
                </div>
                {/* <div className="row">
                    <div className="col-4">
                        <div className="card h-100">
                            card1
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="card">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card">Card</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="card">Card</div>
                            </div>
                            <div className="col-6">
                                <div className="card">Card</div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
        </>
    )
}
