import React from 'react'
import "./projectItem.scss"

export default function ProjectItem({active, title, setSelected, id}) {
    return (
        <li className={active ? "projectItem active" : "projectItem"} onClick={() => setSelected(id)} >
            {title}
        </li>
    )
}
