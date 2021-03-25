import styles from '../styles/Components/Perfil.module.css';
import {useContext} from 'react';
import {ChallengesContext} from '../servers/context/ChallengesContext';

export function PerfilStaticPilar(){
  const {level} =  useContext(ChallengesContext);

  return(
    <div className={styles.perfilContainer}>
      <img src="image/amor.png" alt="avatar"/>
      <div>
        <strong>Pipinha</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          level {level}
        </p>
      </div>
    </div>
  )
}