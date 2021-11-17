import styles from '../styles/Components/Perfil.module.css';
import {useContext} from 'react';
import {ChallengesContext} from '../servers/context/ChallengesContext';

export function Perfil(){
  const {level} =  useContext(ChallengesContext);

  return(
    <div className={styles.perfilContainer}>
      {/* <img src="" alt="avatar"/> */}
      <div>
        <strong>Usuario</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          level {level}
        </p>
      </div>
    </div>
  )
}