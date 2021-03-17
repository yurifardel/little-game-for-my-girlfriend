import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { LevelBar } from '../components/LevelBar';
import { Perfil } from '../components/Perfil';

import styles from '../styles/pages/inicialPlay.module.css';

export default function IncialPlay() {
  return (
    <div className={styles.container}>
      <LevelBar />
      <section>
        <div>
          <Perfil />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  );
}
