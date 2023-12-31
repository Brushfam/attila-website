import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Attila Motors</title>
        <meta name="description" content="Attila Motors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className={styles.main}>
          <p className={styles.header}>Coming soon</p>
          <video className={styles.mainVideo} disablePictureInPicture autoPlay muted loop playsInline>
              <source src="attila-animation.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <div className={styles.footer}>
              <p>2023</p>
              <p>Attila Motors</p>
          </div>
      </main>
    </>
  )
}
