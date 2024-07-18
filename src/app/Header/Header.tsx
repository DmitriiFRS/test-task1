import styles from "./Styles/Header.module.scss";
import Image from "next/image";
import logo from "../../../public/Img/Header/logo.png";
import magnifyingGlass from "../../../public/Img/Header/search.svg";
import chevron from "../../../public/Img/Header/chevronDown.svg";
import Link from "next/link";
import MobileComponent from "./MobileComponent";

export const nav = [
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

function header() {
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.main}>
               <Link href={"/"} className={styles.logo}>
                  <Image src={logo} alt="logo" fill />
               </Link>
               <div className={styles.content}>
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
                  <div className={styles.search}>
                     <Link href={"/"}>
                        <Image className={styles.search__icon} src={magnifyingGlass} alt="search" height={23} width={24} />
                     </Link>
                     <div className={styles.search__inputContainer}>
                        <input className={styles.search__input} type="text" name="search" placeholder="Поиск..." />
                     </div>
                  </div>
                  <button aria-label="language toggler" className={styles.toggleLanguage}>
                     <span>Ру</span>
                     <Image src={chevron} alt="chevron" height={12} width={12} />
                  </button>
                  <MobileComponent />
               </div>
            </div>
         </div>
      </header>
   );
}
export default header;
