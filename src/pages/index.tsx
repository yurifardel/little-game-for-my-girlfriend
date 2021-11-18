import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../components/Footer';

import styles from '../styles/pages/MainHome.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        
      </Head>

      <section className={styles.sectionContent}>
        <div className={styles.container}>
          <h1>
            Almost before we knew it.
          </h1>

          <p>
            Almost before we knew it, we had left the ground.
          </p>

          <Link href="/inicialPlay">
            <button>
              <span>
                <img src="icons/arrow-left.svg" alt="" />
              </span>
              <h4>Click to get started!</h4>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
