import styles from "./page.module.css";
import Image from "next/image";

import construtor from "@/worker.webp";
import mall from "@/mall.png";
import ribeirao from "@/ribeirao.png";
import bangu from "@/bangu.png";
import letter from "@/letter.png";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerBox}>
          <div className={styles.bannerContent}>
            <h1>Construção</h1>
            <p>Nossa construtora é mais do que um nome, é uma promessa de excelência em cada projeto.</p>
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
      {/*  */}
      <div className={styles.parceiros}>
        <div className={styles.parceirosContent}>
          <Image src={mall} alt="parceiro" width={150} />
          <Image src={bangu} alt="parceiro" width={150} />
          <Image src={ribeirao} alt="parceiro" width={150} />
          <Image src={letter} alt="parceiro" width={150} />
        </div>
      </div>
      {/*  */}
      <div className={styles.banner2}>
        <div className={styles.bannerBox2}>
          <div className={styles.bannerContent2}>
            <h1>Confira nossos projetos</h1>
            <p>
              De imponentes arranha-céus a acolhedoras comunidades planejadas, nossos projetos refletem
              inovação e qualidade, deixando uma marca inspiradora em suas áreas.
            </p>
            <div className={styles.bannerButtons2}>
              <button>Acesse</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
