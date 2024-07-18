"use client";

import styles from "./Styles/SecondSection.module.scss";
import Col from "./Col";
import { StaticImageData } from "next/image";

type Props = {
   cols: {
      id: number;
      title: string;
      img: StaticImageData;
      href: string;
   }[];
};

function Cols({ cols }: Props) {
   return (
      <div className={styles.cols}>
         {cols.map((col) => {
            return <Col key={col.id} col={col} />;
         })}
      </div>
   );
}
export default Cols;
