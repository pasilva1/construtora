import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.size}>
        <h1>CONSTRUTORA</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, blanditiis provident libero
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque magnam ipsum ducimus explicabo unde
          consequatur? At doloremque dignissimos soluta, reiciendis, illum perspiciatis vitae fugit atque
          earum accusamus ipsam harum quam.
        </p>
      </div>
      <div className={styles.size}>
        <h1>CONSTRUTORA</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, blanditiis provident libero
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque magnam ipsum ducimus explicabo unde
          consequatur? At doloremque dignissimos soluta, reiciendis, illum perspiciatis vitae fugit atque
          earum accusamus ipsam harum quam.
        </p>
      </div>
    </main>
  );
}
