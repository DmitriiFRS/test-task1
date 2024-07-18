import styles from "./Styles/SecondSection.module.scss";
import col1Img from "../../../public/Img/Main/colImg1.png";
import col2Img from "../../../public/Img/Main/colImg2.png";
import col3Img from "../../../public/Img/Main/colImg3.png";
import arrow from "../../../public/Img/Main/arrow-right.svg";
import bg from "../../../public/Img/Main/secondSectionBG.jpg";
import Image from "next/image";
import Link from "next/link";
import Cols from "./Cols";

export const cols = [
   {
      id: 0,
      title: "Почему следует принимать травы?",
      img: col1Img,
      href: "/",
   },
   {
      id: 1,
      title: "Почему следует принимать пищевые добавки?",
      img: col2Img,
      href: "/",
   },
   {
      id: 2,
      title: "Пищевые ингредиенты Европа 2023 Франкфурт",
      img: col3Img,
      href: "/",
   },
];

function SecondSection() {
   return (
      <section className={styles.section}>
         <div className={styles.bgImage}>
            <Image src={bg} alt="background" fill style={{ objectFit: "cover" }} />
         </div>
         <div className="container">
            <div className={styles.main}>
               <h2 className={styles.title}>Полезные статьи</h2>
               <p className={styles.description}>
                  На нашем сайте мы публикуем новости отрасли и исследовательские статьи. Будьте в курсе новостей и интересных статей.
               </p>
               <Cols cols={cols} />
            </div>
         </div>
      </section>
   );
}
export default SecondSection;
