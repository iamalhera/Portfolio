import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {  BsDownload  } from 'react-icons/bs';
import { AppWrap, MotionWrap } from '../../wrapper';
import Resume from "../../assets/docs/alhera_ahmad_resume.pdf";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className="app__header app__flex" >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am </p>
              <h1 className='head-text'>Al Hera Ahmad</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Software Engineer</p>
          </div>
          <a href={Resume} download="alhera_ahmad_resume">
            <div className='tag-cmp app__flex resume-btn'>
              <div>
                <BsDownload />
              </div>
              <p className="p-text">Resume</p>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" loading="lazy" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profie_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variance={scaleVariants}
        whiteInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.js, images.react, images.typescript].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  "app__primarybg"
);