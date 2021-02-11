import React from 'react'

export default function Grid(props) {
    return (
        <>
            <div className=" grid-contain">
                <nav>Navbar</nav>
                <main>Main</main>
                <div id="sidebar" className="d-sm-none d-md-block">Sidebar</div>
                <div id="content1">Content1</div>
                <div id="content2">Content2</div>
                <div id="content3">Content3</div>
                <footer>Footer</footer>
            </div>
        </>
    )
}
