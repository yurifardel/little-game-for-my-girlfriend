import Head from 'next/head';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/pages/MainHome.module.css';

export default function Main(){
  return(
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Stick&display=swap" rel="stylesheet"/>
      </Head>


      <section className={styles.sectionContent}>
      <div className={styles.container}>
        <h1>
          this is a game of right or wrong answers, 
          to know how much you love me
        </h1>
        
        <p>
          good luck 
        </p>

        <Link href='/game'>
          <button>
              <strong>To play</strong>
          </button>
        </Link>
          
      </div>
      </section>
        
    
      <Footer />
    </>
    
  )
}