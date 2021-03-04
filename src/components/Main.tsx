import styles from '../styles/Components/MainHome.module.css';



export function MainComponent(){
  return(
    <div className={styles.container}>
      <h1>bem vindo</h1>
      <p>blablabla</p>

      <button>entrar</button>
    </div>
    
  )
}