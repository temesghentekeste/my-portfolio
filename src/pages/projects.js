import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects }
}}) => {

  console.log(projects);
  return( 
    <Layout>
      <SEO title="Projects" description="Projects of Temesghen"/>
      <section className="projects-page">
        <Projects projects={projects} title="all projects"/>
      </section>
    </Layout>
    )
}


export const  query = graphql`
{
  allStrapiProjects(filter: {}) {
    nodes {
      stack {
        id
        title
      }
      github
      id
      title
      url
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
export default ProjectsPage

