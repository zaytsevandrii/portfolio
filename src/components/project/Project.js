import React from "react"
import { NavLink } from "react-router-dom"

const Project = ({ img, title,id }) => {
    return (
        <NavLink to={`/projects/${id}`}>
            <li className="project">
                    <img src={img} alt={title} className="project__img" />
                    <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}

export default Project
