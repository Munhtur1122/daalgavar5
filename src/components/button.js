import React from "react";
import styles from './style.module.css' 
import { getClasses } from './getClasses'
const Button = ({variant, text, img, img1}) =>  {
        const buttonTypes = {
        first: "first",
        yes:"yes",
        live:"live",
         color:"color",
         category:"category",   

        };
    return(
      
        <button className={getClasses([
            styles.button,
            styles[`button-${buttonTypes[variant]}`]])}>

                <img src={img} alt="/" 
                className={variant === "yes" ? styles.img
                                                :variant === 'live' ? styles.img
                                                :variant === 'first' ? styles.img
                                                :styles.hide}/>
                {text}
                    
                <img src={img1} alt="/"
                className={variant === "live" ? styles.img1 : styles.hide}/>
            </button>
      
    );
};
export default Button