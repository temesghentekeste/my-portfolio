import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaBloggerB,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
 
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/temesghentekeste/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/temesghentekeste",
  },
  {
    id: 3,
    icon: <FaBloggerB className="social-icon"></FaBloggerB>,
    url: "https://uandiprogramming.blogspot.com/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/temesghentekese1",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
