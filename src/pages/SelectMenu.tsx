import styles from '../styles/pages/SelectMenu.module.css';

export default function SelectMenu() {
  return (
    <div className={styles.SelectMenuContainer}>
      <div className={styles.SelectMenuContent}>
        <h1>Escolha seu personagem.</h1>

        <div className={styles.SelectMenuOptions}>
          <div>
            <a href="">
              <img src="image/yuri.png" alt="yuri" />
            </a>
            <h1>yuri</h1>
          </div>

          <div>
            <a href="">
              <img src="image/amor.png" alt="amor" />
            </a>
            <h1>Pilar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
