import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <div className="hero-text-box">
              <h1>Transforma Tú Vida <br></br>Aprende de las Culturas Ancestrales</h1>
              <a className="btn btn-full" href="#">Regístrate</a>
              <a className="btn btn-ghost" href="https://form.typeform.com/to/VOmPP1iL">Autodiagnóstico</a>
          </div>
      </header>

    </div>
  )
}



{/* <div className="page-container-welcome">

<div className="content-wrap">
   Hello dear!
</div>

</div> */}
