import React from "react";
import styles from "./LandingWrapper.module.scss";

const LandingWrapper = (props) => {
  return <div className={styles.landingWrapper}>{props.children}</div>;
};

export default LandingWrapper;
