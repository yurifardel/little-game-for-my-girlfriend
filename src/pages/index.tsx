import Head from 'next/head';
import { Footer } from '../components/Footer';
import { MainComponent } from '../components/Main';

export default function Main(){
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>


      <section>
      < MainComponent/>
      </section>
        
    
      <Footer />
    </>
    
  )
}