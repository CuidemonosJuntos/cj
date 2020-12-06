import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <nav>
            <div className="row">
                <Image className="logo" src="/img/whitelogo.png" alt="logo" width="100px" height="100px" />
                <ul className="main-nav">
                        <li><a href="#">Quiénes Somos</a></li>
                        <li><a href="#">Lo que ofrecemos</a></li>
                        <li><a href="#">Planes</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Log In</a></li>
                </ul>
            </div>

          </nav>
          <div className="hero-text-box">
                <h1>Transforma Tú Vida<br></br>Aprende de las Culturas Ancestrales</h1>
                <a className="btn btn-full" href="#">Regístrate</a>
                <a className="btn btn-ghost" href="https://form.typeform.com/to/VOmPP1iL">Autodiagnóstico</a>
          </div>
      </header>

    </div>
  )
}

