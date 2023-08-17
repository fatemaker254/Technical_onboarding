/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3rdbackground.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A fully functioning E-commerce website",
    description:
      "A fully functioning e commerce website which can be used to buy products and also has a admin panel to manage the products and orders",
    url: "https://nouvofashion.netlify.app/",
  },
  {
    title: "Python ML/AI for Beginners",
    description:
      "Tutored many bright brains in the field of Machine Learning and Artificial Intelligence",
    url: "",
  },
  {
    title: "My Resume Site",
    description:
      "My resume ",
    url: "https://drive.google.com/file/d/1LpBJsfDQPDMYzQ2s8q3EJtM21qjqQAfn/view?usp=sharing",
  },
  {
    title: "Muggle Room - Video Conference Application",
    description:
      "With screen sharing capabilities, private and group messaging, admin controls, and much more, this video chat app is the best group video conference app.",
    url: "https://muggleroom.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
