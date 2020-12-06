import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import Link from 'next/link'

export default () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.herotextbox}>
            <h1>Transforma Tú Vida <br></br>Aprende de las Culturas Ancestrales</h1>
              <a className="btn btn-full" href="#">Regístrate</a>
              <a className="btn btn-ghost" href="https://form.typeform.com/to/VOmPP1iL">Autodiagnóstico</a>
        </div>
      </header>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
