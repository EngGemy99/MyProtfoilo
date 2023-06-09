import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div id="about">
      <h2 className="head-text">
        I Know that
        <span>Good Development</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts &&
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profiles-item"
              key={about.title + index}
            >
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                style={{ width: "100%" }}
              />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
              <div className="go-corner" href="#"></div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
