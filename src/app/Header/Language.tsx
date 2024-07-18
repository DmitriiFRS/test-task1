"use client";
import styles from "./Styles/Header.module.scss";
import Image from "next/image";
import chevron from "../../../public/Img/Header/chevronDown.svg";
import React, { useState } from "react";

const lang = [
   {
      id: 0,
      title: "Ру",
   },
   {
      id: 1,
      title: "En",
   },
   {
      id: 2,
      title: "Uz",
   },
];

function Language() {
   const [currentLanguage, setCurrentLanguage] = useState(lang[0].title);
   const [isOpen, setIsOpen] = useState(false);
   function toggleLanguage(index: number) {
      if (lang[index].title === currentLanguage) return;
      setCurrentLanguage(lang[index].title);
      setIsOpen(false);
   }
   function toggleDropdown() {
      setIsOpen(!isOpen);
   }
   return (
      <div className={styles.language}>
         <button onClick={toggleDropdown} aria-label="language toggler" className={styles.toggleLanguage}>
            <span>{currentLanguage}</span>
            <Image className={`${styles.chevron} ${isOpen ? styles.chevron__active : ""}`} src={chevron} alt="chevron" height={12} width={12} />
         </button>
         <div className={`${styles.language__dropdown} ${isOpen ? styles.language__dropdown__active : ""}`}>
            <ul className={styles.language__dropdown__list}>
               {lang.map((item, index) => {
                  return (
                     <li className={styles.language__dropdown__item} key={item.id}>
                        <button
                           onClick={() => toggleLanguage(index)}
                           className={`${styles.language__dropdown__btn} ${item.title === currentLanguage ? styles.language__dropdown__btn__active : ""}`}
                        >
                           {item.title}
                        </button>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
export default Language;
