import React from "react";
import styles from "./LandingBadge.module.scss";

const LandingBadge = (props) => {
  return (
    <div className={styles.landingBadge}>
      <div className={styles.landingBadge__badge}>{props.badge}</div>
    </div>
  );
};

export default LandingBadge;
