import styles from "./page.module.css";
import Image from "next/image";

import construtor from "@/worker.webp";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerBox}>
          <div className={styles.bannerContent}>
            <h1>Construtora</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia,
              quod voluptate
            </p>
            <div className={styles.bannerButtons}>
              <button>Conheça nossos projetos</button>
              <button>Contato</button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={styles.group}>
        <div className={styles.groupContent}>
          <div className={styles.groupInfo}>
            <h1>Inovação Além das fundações.</h1>
            <p>
              Na nossa construtora, a inovação é alicerçada em cada projeto, transcendendo as próprias
              fundações e redefinindo os padrões do setor da construção.
            </p>
            <button>Trabalhe conosco</button>
          </div>
          <div className={styles.groupImage}>
            <Image src={construtor} alt="construtor" width={500} />
          </div>
        </div>
      </div>
    </>
  );
}
