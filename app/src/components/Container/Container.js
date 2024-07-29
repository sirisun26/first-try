import React from "react";
import styles from "./Container.module.scss";

export default function Container(props) {
  return <div className={styles.appContainer}>{props.children}</div>;
}
