import styles from '../styles/Components/LevelBar.module.css';


export function LevelBar() {
  return (
    <header className={styles.headerBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: '40%' }} />

        <span className={styles.currentBar}>50xp</span>
      </div>
      <span>100 xp</span>
    </header>
  );
}
