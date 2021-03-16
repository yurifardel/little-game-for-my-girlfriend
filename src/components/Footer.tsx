import styles from '../styles/Components/Footer.module.css';

export function Footer() {
  return (
    <div className={styles.container}>
      <a href="https://github.com/yurifardel/little-game-for-my-girlfriend">
        <strong>project repository on github</strong>
      </a>
      <p>att. Yuri Regis Nascimento</p>
    </div>
  );
}
