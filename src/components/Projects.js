import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = (props) => {
  const { projects, title,showLink } = props;
  return <section className="section projects">
      <Title title={title}/>
      <div className="section-center projects-center">
        {
          projects.map((project, index) => {
            return( <Project key={index} index={index} {...project}/>
            )
          })
        }
      </div>
        {
          showLink && <Link to='/projects' className="btn center-btn">Projects</Link>
        }
    </section>
}

export default Projects
