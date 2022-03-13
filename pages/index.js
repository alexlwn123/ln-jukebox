import Head from 'next/head'
import Image from 'next/image'
// import { requestInvoice } from '../serviceRequests/Voltage'
import styles from '../styles/Home.module.css'
import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled'
import { MusicNoteIcon } from '@heroicons/react/solid'

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
              Hello world! <BitcoinIcon className="w-8 h-8 text-lnj-purple" /> <MusicNoteIcon className="w-8 h-8 text-lnj-purple-dark" />
          </h1>
      </main>

      <footer className={styles.footer}>
        <p>placeholder footer</p>
      </footer>
    </div>
  )

  requestInvoice();
}
