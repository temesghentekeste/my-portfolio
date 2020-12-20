import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Publications from "../components/Publications"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {
  const { allStrapiProjects: { nodes: projects}} = data
  return (
    <Layout>
      <Hero/>
      <Publications/>
      <Jobs/>
      <Projects projects={projects} title="featured projects" showLink/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
