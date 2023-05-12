import image1 from './images/image001.jpg'
import image2 from './images/image002.jpg'
import image3 from './images/image003.jpg'
import image4 from './images/image004.jpg'
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const array_images = [image1, image2, image3, image4];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        className="carrousel"
        ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          className="inner">
          {array_images?.map(image => (
            <motion.div className="item">
              <img src={image} alt="image" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
