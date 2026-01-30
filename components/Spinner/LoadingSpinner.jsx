import React from "react";
import Styles from "../../css/LoadingSpinner/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={Styles.spinnerContainer}>
      <div className={Styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
