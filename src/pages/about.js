import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
export const query = graphql`
{
  about: allStrapiAbout {
    nodes {
      id
      title
      info
      stack {
        id
        title
      }
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
const About = ({data: {about:{nodes}}}) => {
  const {title, stack, image, info} = nodes[0]
  console.log("********************");
  console.log(title, stack, image, info);
  console.log("********************");
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img"/>
        <article className="about-text">
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {
              stack.map((item) => {
                return(
                  <span key={item.id}>{item.title}</span>
                )
              })
            }
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export default About
