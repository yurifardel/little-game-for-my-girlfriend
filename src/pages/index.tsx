import Head from 'next/head';
import { Footer } from '../components/Footer';
import { MainComponent } from '../components/Main';
import styles from '../styles/pages/Home.module.css';


export default function Main(){
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>


      <section className={styles.sectionContent}>
      < MainComponent/>
      </section>
        
    
      <Footer />
    </>
    
  )
}