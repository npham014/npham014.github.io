import "./about.scss";
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function About() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor:true,
            backDelay: 700,
            backSpeed: 50,
            strings:["Software Engineer", "Full-Stack Developer"],
        });
    },[]);
    

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/old_headshot.png" alt="Headshot of Me!"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nathan Pham:</h1>
                    <h3>
                        Freelance <span ref={textRef}></span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
