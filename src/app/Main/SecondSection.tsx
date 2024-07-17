import styles from "./Styles/SecondSection.module.scss";
import col1Img from "../../../public/Img/Main/colImg1.png";
import col2Img from "../../../public/Img/Main/colImg2.png";
import col3Img from "../../../public/Img/Main/colImg3.png";
import arrow from "../../../public/Img/Main/arrow-right.svg";
import bg from "../../../public/Img/Main/secondSectionBG.jpg";
import Image from "next/image";
import Link from "next/link";

const cols = [
   {
      id: 0,
      title: "",
      img: col1Img,
      href: "/",
      isRead: false,
   },
   {
      id: 1,
      title: "Почему следует принимать пищевые добавки?",
      img: col2Img,
      href: "/",
      isRead: true,
   },
   {
      id: 2,
      title: "Пищевые ингредиенты Европа 2023 Франкфурт",
      img: col3Img,
      href: "/",
      isRead: true,
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
               <div className={styles.cols}>
                  {cols.map((col) => {
                     return (
                        <Link style={{ color: "inherit" }} href={col.href} className={styles.cols__item} key={col.id}>
                           <div className={styles.cols__item__img}>
                              <Image src={col.img} alt="bg-image" fill style={{ objectFit: "cover" }} />
                           </div>
                           <div className={styles.cols__item__title}>{col.title}</div>
                           {col.isRead && (
                              <div className={styles.cols__item__read}>
                                 <span>Читать</span>
                                 <Image src={arrow} alt="arrow" width={43} height={24} />
                              </div>
                           )}
                        </Link>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
export default SecondSection;
