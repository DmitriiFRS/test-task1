import styles from "./Styles/FirstSection.module.scss";
import Image from "next/image";
import play from "../../../public/Img/Main/play-circle.svg";
import bgBottom from "../../../public/Img/Main/firstSectionMG.png";
import bgTop from "../../../public/Img/Main/firstSectionHG.png";

function FirstSection() {
   return (
      <section className={styles.section}>
         <div className={styles.bgTop}>
            <Image src={bgTop} alt="bg" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={styles.bgBottom}>
            <Image src={bgBottom} alt="bg" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={styles.bgGradient2}></div>
         <div className={styles.bgGradient}></div>
         <div className={styles.bgGradientShadow}></div>
         <div className="container">
            <div className={styles.main}>
               <h1 className={styles.title}>
                  Экологически чистые продукты из богатой флоры <span>Узбекистана</span>
               </h1>
               <p className={styles.description}>
                  Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и глубоких знаний. Опираясь на богатое историческое
                  наследие Узбекистана и стремление к инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие, целью
                  которого является использование экологически чистых, натуральных местных природных богатств — цветов, листьев, кожуры, семян, корней
                  дикорастущих лекарственных растений, фруктов и овощей
               </p>
               <div className={styles.btns}>
                  <button className={styles.btns__btn}>Связаться с нами</button>
                  <button className={`${styles.btns__btn} ${styles.btns__btn2}`}>
                     <span>Смотреть о нас</span>
                     <Image className={styles.btns__icon} src={play} alt="play" height={25} width={25} />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
export default FirstSection;
