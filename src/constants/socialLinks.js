import React from "react"
import {
  FaLinkedin,
  FaDribbbleSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
 
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/temesghentekeste/",
  },
  {
    id: 2,
    icon: <img src="https://img.icons8.com/windows/33/000000/github.png"/>,
    url: "https://github.com/temesghentekeste",
  },
  {
    id: 3,
    icon: <img src="https://img.icons8.com/color/33/000000/blogger.png"/>,
    url: "https://uandiprogramming.blogspot.com/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/temesghentekese1",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="blank">
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
