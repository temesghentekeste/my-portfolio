import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Publications from "../components/Publications"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from '../components/SEO';

export default ({data}) => {
  const { allStrapiProjects: { nodes: projects}} = data
  return (
    <Layout>
      <SEO title="Home"/>
      <Hero/>
      <Jobs/>
      <Projects projects={projects} title="featured projects" showLink/>
      <Publications/>
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
