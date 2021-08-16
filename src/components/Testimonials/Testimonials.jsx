import "./testimonials.scss";
import {rec} from "../../data.js";

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Recommendations</h1>
            <div className="container">
                {rec.map(r => (
                    <div className="card">
                        <div className="top">
                            {r.testimonial}   
                        </div>
                        <div className="bottom">
                            <h3>{r.name}</h3>
                            <h4>{r.pos}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
