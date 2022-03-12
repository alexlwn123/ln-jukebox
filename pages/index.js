import Head from 'next/head'
import Image from 'next/image'
// import { requestInvoice } from '../serviceRequests/Voltage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pleb Party</title>
        <h1>ln-jukebox</h1>
        <meta name="description" content="placeholder screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>placeholder main</p>
          <h1 className="text-base font-bold underline">
              Hello world!
          </h1>
      </main>

      <footer className={styles.footer}>
        <p>placeholder footer</p>
      </footer>
    </div>
  )

  requestInvoice();
}
