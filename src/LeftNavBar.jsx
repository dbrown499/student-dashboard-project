import React, { useState } from 'react'
import './LeftNavBar.css'
// import InfoList from './data/data.json'



const LeftNavBar = (prop) => {
    const dates = [
        "All Students",
        "Winter 2026",
        "Fall 2026",
        "Summer 2026",
        "Spring 2026",
        "Winter 2025",
        "Fall 2025",
        "Summer 2025",
        "Spring 2025"
    ]

    

    return (
        <aside>Choose a Class by Start Date
            <ol>
                <li><button onClick={prop.funcA}>All Students</button></li><hr />
                <li><button onClick={prop.funcB}>Winter 2026</button></li><hr />
                <li><button onClick={prop.funcC}>Fall 2026</button></li><hr />
                <li><button onClick={prop.funcD}>Summer 2026</button></li><hr />
                <li><button onClick={prop.funcE}>Spring 2026</button></li><hr />
                <li><button onClick={prop.funcF}>Winter 2025</button></li><hr />
                <li><button onClick={prop.funcG}>Fall 2025</button></li><hr />
                <li><button onClick={prop.funcH}>Summer 2025</button></li><hr />
                <li><button onClick={prop.funcI}>Spring 2025</button></li>
            </ol>
        </aside>
    )
}

export default LeftNavBar