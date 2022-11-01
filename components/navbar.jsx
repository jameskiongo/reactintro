import React from "react"
import reactImage from "../src/assets/react.svg"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={reactImage}/>
            <h3 className="react-facts">ReactFacts</h3>
            <h2>react course - project 1</h2>
        </div>
    );
} 