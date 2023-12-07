import React from 'react';
import './Experience.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { BsAlarmFill, BsGlobe, BsLink } from 'react-icons/bs';


const Experience = () => {

  return (
    <div id="experience" className='app__experience'>
      <h2 className='head-text about__description'>
        Work <span>Experience</span>
      </h2>
      <div className="app__experiences">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__experience-item"
        >
          <section className="experience__one">
            <img src={images.kayrros} alt="Software Engineer" loading="lazy" />
            <div style={{ margin: "1rem", width: "95%" }}>
              <h2 className="bold-text" style={{ fontSize: 22 }}>Software Engineer</h2>
              <p className="p-text-dark" style={{ marginTop: "1rem", }}>Kayrros - An Environmental Intelligence Company</p>
              <p className="p-text" style={{ textAlign: "right" }}><i>Jul. 23 - Dec. 23</i></p>
              <p className="p-text-dark" style={{ textAlign: "right" }}><i>Bengaluru, India</i></p>
            </div>
          </section>
          <section className='experience__two'>
            <article>
              <div className="article__one-head">
                <h5><i>US Carbon Watch</i></h5>
                <a href="https://kayrros.com/unlocking-the-future-of-california-carbon-trades-introducing-us-carbon-watch/" target='_blank'><BsLink/></a>
              </div>
              <ul>
                <li><p className="p-text-dark">Cloud-based service, built with Microservices, informs US/EU customers about carbon credits.</p></li>
                <li><p className="p-text-dark">Developed the entire UI for the product, ensuring responsiveness for tablet and desktop view.</p></li>
                <li><p className="p-text-dark">Created a REST API for public use of the product.</p></li>
                <li><p className="p-text-dark"><i>Technologies Used: React, JavaScript, NodeJS, HighCharts, ElasticSearch</i></p></li>
              </ul>
              </article>
              <article>
                <div className="article__two-head">
                  <h5><i>World Emission</i></h5>
                  <a href="https://app.world-emission.com/" target='_blank'><BsGlobe/></a>
                </div>
                <ul>
                  <li><p className="p-text-dark">Kayrros hosts the World Emission portal, a public site in collaboration with research labs and government agencies,
monitoring global greenhouse gas emissions.</p></li>
                  <li><p className="p-text-dark">Significantly enhanced the pointSource and regional perspectives of the app by introducing multiple products.</p></li>
                  <li><p className="p-text-dark">Restructured the UI code for improved efficiency and modularity</p></li>
                  <li><p className="p-text-dark">Implemented various additional features and addressed UI-related bugs in the app.</p></li>
                  <li><p className="p-text-dark">Technologies Used: <i>React, JavaScript, HighCharts, MapBox, DeckGL</i></p></li>
                </ul>
                </article>
            </section>
          </motion.div>
        {/* ))} */}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  "app__primarybg"
);