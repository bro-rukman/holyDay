import React, { useEffect, useState } from 'react'
import Button from 'elements/button';
import 'assets/scss/style.scss';
import IconText from './IconText';
// import 'assets/scss/Header.scss';

export default function Header(props) {
    const getNavLinkClass = (path) =>{
        return props.location.pathname === path ? 'active' : '';
    }
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick =()=>setClick(!click);
    const closeMenu=()=>setClick(false);
    const showButton=()=>{
        if (window.innerWidth<=960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton);
    return (
        <header className="">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-light p-0">
                    <IconText/>
                    <div className="menu-icon navbar-toggler py-2" onClick={handleClick} data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${getNavLinkClass('/')}`}>
                            <Button className="nav-link active" href="/" type="link">Home</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/browser-by')}`}>
                            <Button className="nav-link" href="/browser-by" type="link">Browser By</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/stories')}`}>
                            <Button className="nav-link" href="stories" type="link">Stories</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/agents')}`}>
                            <Button className="nav-link" href="agents" type="link">Agents</Button>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    )
}
