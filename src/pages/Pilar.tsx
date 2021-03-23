import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { LevelBar } from '../components/LevelBar';
import { PerfilStaticPilar } from '../components/PerfilStaticPilar';

import styles from '../styles/pages/inicialPlay.module.css';

import { CountdownProvider } from '../servers/context/CountdownContext';
import { ChallengeProvider } from '../servers/context/ChallengesContext';

interface Props {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function IncialPlay(props: Props) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <LevelBar />
        <CountdownProvider>
          <section>
            <div>
              <PerfilStaticPilar/>
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  );
}
