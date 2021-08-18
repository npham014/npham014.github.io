import "./projects.scss";
import ProjectItem from "../ProjectItem/ProjectItem.jsx"
import React from "react"
import { featured, webApp, mobile, etc } from "../../data";
import {Link} from '@material-ui/core';
 
export default function Projects() {
    const [selected, setSelected] = React.useState("1");
    const [page, setPage] = React.useState([]);
    let projectList = [
        {
            id: "1",
            title: "Featured"
        },
        {
            id: "2",
            title: "Web Apps"
        },
        {
            id: "3",
            title: "Mobile Apps"
        },
        {
            id: "4",
            title: "Other Projects"
        },
    ];

    React.useEffect(() => {
        switch(selected) {
            case "1":
                setPage(featured);
                break;
            case "2":
                setPage(webApp);
                break;
            case "3":
                setPage(mobile);
                break;
            case "4":
                setPage(etc);
                break;
            default:
                setPage(featured);
                break;
        }
    }, [selected])


    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {projectList.map(p => (
                    <ProjectItem 
                        id={p.id} 
                        title={p.title} 
                        active={selected === p.id} 
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                    {page.map((pg) => (
                        <Link className="item" href={pg.link} target="_blank">
                            <img
                                src={pg.img}
                                alt="thumbnail of website"
                            />
                            <h3>{pg.title}</h3>
                        </Link>
                    ))};
            </div>
        </div>
    )
}
