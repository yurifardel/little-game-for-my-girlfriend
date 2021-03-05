import styles from '../styles/Components/Footer.module.css';

export function Footer(){
  return(
    <div className={styles.container}>
      <h1>footer</h1>
      <a href="https://github.com/yurifardel/correct-types">
        <strong>Repositorio</strong>
      </a>
    </div>
  )
 
}