import Button from 'elements/button'
import React from 'react'

export default function Sidebar(props) {
    return (
        <>
        <div id="wrapper">
            
         <section className="wrapper-sidebar">
            <div className="sidebar">
                <ul>
                    <li>
                        <Button type="link" className="btn">Button1</Button>
                    </li>
                    <li>
                        <Button type="link" className="btn">Button2</Button>
                    </li>
                    <li>
                        <Button type="link" className="btn">Button3</Button>
                    </li>
                    <li>
                        <Button type="link" className="btn">Button4</Button>
                    </li>
                </ul>
            </div>
         </section>
         {/* Content */}
         <section className="content-wrapper">
             <div className="container-fluid">
                 <div class="row">
                     <div className="col-lg-12">
                         <a href="" className="btn btn-primary " id="menu-toggle">Menu Toggle</a>
                         <h3 className="mb-3">Sidebar</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem possimus totam delectus illum harum quam facere, corrupti, minus pariatur ipsam? Tenetur debitis mollitia, esse iste, ducimus tempore, velit libero fugiat perferendis quia vitae nemo! In expedita, perspiciatis laboriosam nesciunt eius natus veritatis quaerat, sint praesentium iusto nostrum maiores. Totam unde, ratione illum, esse ea sint excepturi nostrum maxime et possimus vitae eum sequi cum quod at repellendus perferendis, voluptatem aut. Illum placeat repudiandae amet, numquam fugiat, praesentium tenetur, cupiditate assumenda eius voluptate sint nisi necessitatibus unde aliquam ad repellendus reprehenderit nobis veritatis. Dolorem vitae ipsam incidunt accusantium vero optio.</p>
                     </div>
                 </div>
             </div>
         </section>   
        </div>
        </>
    )
}
