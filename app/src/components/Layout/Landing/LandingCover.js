import React from "react";
import styles from "./LandingCover.module.scss";
import LandingBadge from "./LandingBadge";

const LandingCover = ({ badge, ...props }) => {
  return (
    <div className={styles.landingCover}>
      <img src={props.image} alt={props.alt} className={styles.landingImage} />
      <LandingBadge badge={badge} />
      {props.children}
    </div>
  );
};

export default LandingCover;
