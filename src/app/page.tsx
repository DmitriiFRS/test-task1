import Image from "next/image";
import styles from "./page.module.css";
import FirstSection from "./Main/FirstSection";
import SecondSection from "./Main/SecondSection";

export default function Home() {
   return (
      <main className={styles.main}>
         <FirstSection />
         <SecondSection />
      </main>
   );
}
