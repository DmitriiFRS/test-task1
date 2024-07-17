import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../../public/Img/Header/logo.png";
import Link from "next/link";
import bg from "../../../public/Img/Footer/footerLogo.png";
import fb from "../../../public/Img/Footer/facebook.svg";
import inst from "../../../public/Img/Footer/instagram.svg";
import tg from "../../../public/Img/Footer/telegram.svg";

const addresses = [
   {
      id: 0,
      title: "Адрес головного офиса:",
      address: "100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б",
   },
   {
      id: 1,
      title: "Адрес производства:",
      address: "111305, Республика Узбекистан, Ташкентская область, Паркентский район, Каракалпакский Марказий МФУ",
   },
];

const nav = [
   {
      id: 0,
      title: "Главная",
      href: "/",
   },
   {
      id: 1,
      title: "О нас",
      href: "/",
   },
   {
      id: 2,
      title: "Продукты",
      href: "/",
   },
   {
      id: 3,
      title: "Контакты",
      href: "/",
   },
   {
      id: 4,
      title: "Новости",
      href: "/",
   },
];

const contacts = [
   {
      id: 0,
      title: "Как с нами связаться?",
   },
   {
      id: 1,
      title: "info@yumabio.com",
      href: "/",
   },
   {
      id: 2,
      title: "+998 95 478 88 87",
      href: "/",
   },
   {
      id: 3,
      title: "+998 93 321 24 42",
      href: "/",
   },
];

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={`container ${styles.footer__container}`}>
            <div className={styles.bgImg}>
               <Image src={bg} alt="bgImg" fill />
            </div>
            <div className={styles.main}>
               <Link href={"/"} className={styles.logo}>
                  <Image src={logo} alt="logo" fill />
               </Link>
               <div className={styles.address}>
                  {addresses.map((item) => {
                     return (
                        <div className={styles.address__item} key={item.id}>
                           <div className={styles.item__titte}>{item.title}</div>
                           <div className={styles.item__address}>{item.address}</div>
                        </div>
                     );
                  })}
               </div>
               <nav className={styles.nav}>
                  <ul className={styles.nav__list}>
                     {nav.map((item) => {
                        return (
                           <li className={styles.nav__item} key={item.id}>
                              <Link style={{ color: "inherit" }} href={item.href}>
                                 {item.title}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
               <div className={styles.contacts}>
                  <div className={styles.contacts__list}>
                     {contacts.map((item) => {
                        return item.href ? (
                           <Link style={{ color: "inherit" }} href={item.href} key={item.id}>
                              {item.title}
                           </Link>
                        ) : (
                           <div key={item.id}>{item.title}</div>
                        );
                     })}
                     <div className={styles.contacts__icons}>
                        <Link href={"/"}>
                           <Image src={inst} alt="instagram" width={24} height={24} />
                        </Link>
                        <Link href={"/"}>
                           <Image src={fb} alt="instagram" width={24} height={24} />
                        </Link>
                        <Link href={"/"}>
                           <Image src={tg} alt="instagram" width={24} height={24} />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
