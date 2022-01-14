import React from 'react'
import "./description.scss"
import {Button} from '@material-ui/core'

export default function Description() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.download = "Resume_11422.pdf"
        link.href = "./assets/Resume_11422.pdf"
        link.click();
    }

    return (
        <div className="description" id="desc">
            <h1>About Me</h1>
            <div className="container">
                <div className="top">
                    <h2>I'm Nathan Pham, a software designer and developer living in Los Angeles, California. I'm currently focused on developing web applications, but work on mobile apps and games as a hobby. I graduated from UC Riverside with a degree in Computer Science, and have experience working with production level web applications with cloud technologies. Outside of work, I like to play and design video/tabletop games, snowboard, and cook.</h2>
                </div>
                <div className="bottom">
                    <div className="botLeft">
                        <h2>Technical Skills:</h2>
                        <ul>
                            <li>Javascript/Typescript</li>
                            <li>HTML/CSS/SASS</li>
                            <li>React, Redux, Material-UI</li>
                            <li>C++</li>
                            <li>Git</li>
                            <li>Cloud Platforms: AWS, GCP/Firebase, Azure</li>
                            <li>Databases: MongoDB, Firestore</li>
                            <li>RESTful APIs</li>
                            <li>SCRUM and Agile work-flow</li>
                        </ul>
                    </div>
                    <div className="botRight">
                        <h2>My Resume</h2>
                        <h3>Want to see more details? Download my resume:</h3>
                        <Button onClick={handleDownload} variant="contained" color="primary" className="button">Download</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
