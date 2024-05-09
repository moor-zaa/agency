import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>morzadev</div>
      <div className={styles.text}>
        Morza creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
