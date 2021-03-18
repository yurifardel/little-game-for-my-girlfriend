import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { LevelBar } from '../components/LevelBar';
import { Perfil } from '../components/Perfil';

import styles from '../styles/pages/inicialPlay.module.css';

import { CountdownProvider } from '../servers/context/CountdownContext';

export default function IncialPlay() {
  return (
    <div className={styles.container}>
      <LevelBar />
      <CountdownProvider>
        <section>
          <div>
            <Perfil />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
