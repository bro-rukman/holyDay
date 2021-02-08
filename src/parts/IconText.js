import React from 'react'
import Button from '../elements/button';
import '../assets/scss/style.scss';
import logo from 'assets/logo/logo_holyday.jpg';

export default function IconText() {
    return (
        <Button className="brand-text-icon" href="" type="link" onclick={'/'}>
            <img src={logo} alt="" width="50px" height="40px"/>
        </Button>
    )
}
