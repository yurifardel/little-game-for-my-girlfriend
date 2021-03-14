import Head from 'next/head';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/pages/MainHome.module.css';

export default function Main(){
  return(
    <>
      <Head>
        <title>Home</title>
        
      </Head>


      <section className={styles.sectionContent}>
      <div className={styles.container}>
        <h1>
          Seu questionário de conhecimento
        </h1>
        
        <p>
          O quanto você conhece o seu namorado e a sua relação com ele.
          
        </p>

        <Link href='/game'>
          <button>
            <span>
              <img src="icons/arrow-left.svg" alt=""/>
            </span>
            <h4>Clique para começar!</h4>
          </button>
        </Link>
          
      </div>
      </section>
        
    
      <Footer />
    </>
    
  )
}