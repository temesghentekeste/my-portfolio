import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Publications from "../components/Publications"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {

  return (
    <Layout>
      <Hero/>
      <Publications/>
      <Jobs/>
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
