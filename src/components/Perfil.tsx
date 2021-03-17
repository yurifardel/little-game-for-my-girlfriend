import styles from '../styles/Components/Perfil.module.css';

export function Perfil(){
  return(
    <div className={styles.perfilContainer}>
      <img src="image/amor.png" alt="avatar"/>
      <div>
        <strong>Pipinha</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          level 1
        </p>
      </div>
    </div>
  )
}