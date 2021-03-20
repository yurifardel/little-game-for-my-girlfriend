import styles from '../styles/pages/SelectMenu.module.css';
import Head from 'next/head';

export default function SelectMenu() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.SelectMenuContainer}>
      <div className={styles.SelectMenuContent}>
        <h1 style={{color: 'black'}} >Escolha seu personagem.</h1>

        <div className={styles.SelectMenuOptions}>
          <div className={styles.Container} id={styles.Yuri}>
            <a href="">
              <h1>Yuri</h1>
            </a>
          </div>

          <div className={styles.Container} id={styles.Pilar}>
            <a href="">
              <h1>Pilar</h1>
            </a>
          </div>
        </div>
      </div>
    </div>

      <div className={styles.Footer}>
        <footer>
          <div>
            <a href="">Sem conteudo</a>
          </div>
        </footer>
      </div>
    </>
  );
}
