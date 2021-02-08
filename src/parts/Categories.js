import React from 'react'
import 'assets/scss/style.scss'
import Button from 'elements/button'

export default function Categories({data}) {
    return data.map((categories,index1)=>{
        return (
        <section key={`categories-${index1}`} className="categories container">
                <h3 className="mb-4 mt-5" >{categories.name}</h3>
                <div className="container-grid">
                    {
                        categories.item.length === 0 ? <div className="row">
                            <div className="col-auto align-items-center">
                                There's no property here
                            </div>
                        </div> : categories.item.map((item,index2)=>{
                            return <div className="item column-3 row-1" key={`categories-${index1}-item${index2}`}>
                                <div className="card card-featured">
                                    {item.isPopular && <div className="tag"><span className="text-white">populer{" "}</span></div>}
                                    <figure className="img-wrapper" style={{height: 180}}>
                                            <img className="img-cover" src={item.imageUrl} alt={item.name}/>
                                    </figure>
                                    <div className="img-wrapper">
                                        <Button href={`/properties/${item._id}`} type="link" className="strechted-link d-block text-gray-800"><h6 className="font-weight-medium">{item.name}</h6></Button>
                                        <span className="h6 font-weight-light">{item.city}, {item.country}</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        )
        
    })

}
