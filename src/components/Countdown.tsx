import styles from '../styles/Components/Countdown.module.css';

export function Countdown(){
  return(
    <div className={styles.countdownContainer}>
     <div>
      <span>0</span>
      <span>5</span>
     </div>
     <span>:</span>
     <div>
      <span>0</span>
      <span>0</span>
     </div>

     <button className={styles.countdownButton}>Start</button>
    </div>
   
  )
}