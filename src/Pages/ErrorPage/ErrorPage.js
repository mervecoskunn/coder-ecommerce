import React from 'react'
import styles from "./errorpage.module.scss";
import notfound from "../../assets/notfound.png"

 const ErrorPage = () => {
  return (
   <div className={`${styles.errorPage} d-flex justify-content`}>
     <img src={notfound} alt="not found"/>
   </div>
  );
}
export default ErrorPage;