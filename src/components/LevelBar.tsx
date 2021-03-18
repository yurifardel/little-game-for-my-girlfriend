import styles from '../styles/Components/LevelBar.module.css';
import {ChallengesContext} from '../servers/context/ChallengesContext';
import { useContext } from 'react';

export function LevelBar() {

  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

  const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.headerBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${porcentToNextLevel}%`}} />

        <span className={styles.currentBar} style={{left: `${porcentToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
