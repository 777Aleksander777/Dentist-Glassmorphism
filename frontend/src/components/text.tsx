"use client"

import React from "react";
import { motion, useInView } from "framer-motion";

const Test = () => {
  const ref = React.useRef(null);

  // useInView sprawdza, czy element jest widoczny
  const isInView = useInView(ref, { once: true }); // `once: true` animuje tylko raz

  return (
    <div
      ref={ref}
    >

    <motion.div
      initial={{ x: "-150px", opacity: 0 }} // Start poza ekranem
      animate={isInView ? { x: 0, opacity: 1 } : {}} // Animuj tylko gdy widoczny
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "lightblue",
        padding: "20px",
        margin: "20px 0",
        borderRadius: "8px",
      }}
      >
      <h2>Wysuwam się, gdy mnie widzisz!</h2>
    </motion.div>
      </div>
  );
};

export default Test;
