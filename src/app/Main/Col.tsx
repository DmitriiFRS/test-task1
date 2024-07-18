import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Styles/SecondSection.module.scss";
import arrow from "../../../public/Img/Main/arrow-right.svg";

type Props = {
   col: {
      id: number;
      title: string;
      img: StaticImageData;
      href: string;
   };
};
function Col({ col }: Props) {
   const [showText, setShowText] = useState(false);

   const handleMouseEnter = () => {
      setShowText(true);
   };

   const handleMouseLeave = () => {
      setShowText(false);
   };
   return (
      <Link
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{ color: "inherit" }}
         href={col.href}
         className={`${styles.cols__item} ${showText ? styles.cols__item__active : ""}`}
         key={col.id}
      >
         <div className={styles.cols__item__img}>
            <Image src={col.img} alt="bg-image" fill style={{ objectFit: "cover" }} />
         </div>
         {showText && <div className={styles.cols__item__title}>{col.title}</div>}
         {showText && (
            <div className={styles.cols__item__read}>
               <span>Читать</span>
               <Image src={arrow} alt="arrow" width={43} height={24} />
            </div>
         )}
      </Link>
   );
}
export default Col;
