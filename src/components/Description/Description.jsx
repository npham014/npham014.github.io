import React from 'react'
import "./description.scss"

export default function Description() {
    return (
        <div className="description" id="desc">
            <h1>About Me</h1>
            <div className="container">
                <div className="top">
                    <h2>I'm Nathan Pham, a software designer and developer living in Los Angeles, California. I'm currently focused on developing web applications, but work on mobile apps and games as a hobby. I graduated from UC Riverside with a degree in Computer Science, and have experience working with production level web applications with cloud technologies. Outside of work, I like to play and design video/tabletop games, snowboard, and cook.</h2>
                </div>
                <div className="bottom">
                    <div className="botLeft">
                        <h2> left side of me</h2>
                    </div>
                    <div className="botRight">
                        <h2> right side of me</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
