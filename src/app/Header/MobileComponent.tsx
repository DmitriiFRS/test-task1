"use client";

import React, { useState } from "react";
import s from "./Styles/Header.module.scss";
import styles from "./Styles/HeaderPopup.module.scss";
import { nav } from "./Header";
import Link from "next/link";

function MobileComponent() {
   const [isOpen, setIsOpen] = useState(false);
   function toggleModal() {
      setIsOpen(!isOpen);
      if (!isOpen) {
         const scrollWidth = window.innerWidth - document.body.clientWidth;
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = `0px`;
      }
   }
   return (
      <React.Fragment>
         <div onClick={toggleModal} className={`${styles.popup} ${isOpen ? styles.popup__active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={styles.body}>
               <nav className={styles.nav}>
                  <ul className={styles.nav__list}>
                     {nav.map((item) => {
                        return (
                           <li className={styles.nav__item} key={item.id}>
                              <Link onClick={toggleModal} style={{ color: "inherit" }} href={item.href}>
                                 {item.title}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
            </div>
         </div>
         <button onClick={toggleModal} className={s.burger}>
            <span></span>
            <span></span>
            <span></span>
         </button>
      </React.Fragment>
   );
}
export default MobileComponent;
