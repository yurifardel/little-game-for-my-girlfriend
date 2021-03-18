import styles from '../styles/Components/ChallengeBox.module.css';

export function ChallengeBox(){
  return(
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeActive}>
        <header>Ganhe 200xp</header>

        <main>
          <img src="./icons/body.svg" alt=""/>
          <strong>Novo Desafio</strong>
          <p>descrição do desafio</p>
        </main>

        <footer>
          <button className={styles.challengeFailedButton}>
            Errei
          </button>

          <button className={styles.challengeSucceededButton}>
            Acertei
          </button>
        </footer>
      </div>

      {/* <div className={styles.challengeNotActive}>
        <strong>Finalize um cilco para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level acertando as perguntas.
        </p>
      </div> */}
    </div>
  )
}