import styles from '../styles/Components/MainHome.module.css';
import Head from 'next/head';



export function MainComponent(){
  return(
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Fascinate&family=Kaushan+Script&display=swap" rel="stylesheet"/>
    </Head>
      <div className={styles.container}>
        <h1>
          this is a game of right or wrong answers, 
          to know how much you love me
        </h1>
        
        <p>
          I hope you have a great score,
          good luck pilar
        </p>

        <button>
          <strong>To play</strong>
        </button>
      </div>
    </>
  )
}