import React from 'react'

export default function Choose(props) {
    return (
        <>
            <section ref={props.refMostPicked} className="choose container mb-5">
            <h3>Mengapa Memilih Kami ?</h3>
            <div className="row">{props.data.map((item,index)=>{
                return(
                    <div key={`choose-${index}`} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card-center text-center">
                            <div className="card-body mx-auto">
                                <h5 className="card-title text-center mb-4">{item.name}</h5>
                                <img className="img-fluid mb-4" style={{width : 80, height : 80}} src={item.imageUrl} alt={item.nama}/>
                                <p className="text-center">{item.text}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
                </div>
            </section>
        </>
    )
}
