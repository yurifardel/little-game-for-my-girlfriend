import styles from '../styles/Components/Perfil.module.css';

export function PerfilStaticYuri(){
  return(
    <div className={styles.perfilContainer}>
      {/* <img src="image/yuri.jpg" alt="avatar"/> */}
      <div>
        <strong>Yuri</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          level 1
        </p>
      </div>
    </div>
  )
}