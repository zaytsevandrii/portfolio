import React from "react"
import gitHubIcon from "./../img/icons/gitHub-black.svg"
import { useParams } from "react-router-dom"
import { projects } from "../constans/projectList"

const ProjectPage = () => {
  const {id} = useParams()
  const project = projects[id]
  console.log(project)
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <a href={project.gitHubLink} rel="noreferrer" target='_blank' className="btn-outline">
                        <img src={gitHubIcon} alt="" />
                        GitHub repo
                    </a>
                </div>
            </div>
        </main>
    )
}

export default ProjectPage
