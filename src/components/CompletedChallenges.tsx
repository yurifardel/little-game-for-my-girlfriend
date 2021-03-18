import styles from '../styles/Components/CompletedChallenges.module.css';
import { useContext } from 'react';
import { ChallengesContext} from '../servers/context/ChallengesContext'


export function CompletedChallenges(){

  const { challengeCompleted } = useContext(ChallengesContext);
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}