import React from "react"
import Title from "./Title"
import publications from "../constants/publications"
const Publications = () => {
  return (
    <section className="section bg-gray">
      <Title title="Publications"/>
      <div className="section-center services-center">
        {publications.map(publication => {
          const { id, icon, title, text, link } = publication

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
              <a href={link} target="_blank" className="btn">
               View Orignal Article
            </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Publications
