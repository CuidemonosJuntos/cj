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
                <div className="logo"><Image src="/img/whitelogo.png" alt="logo" width="100px" height="100px" /></div>
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

      <section className="section-features">
          <div className="row">
                <h2>Nuestros Servicios &mdash; Círculos de crecimiento</h2>
                <p className="long-copy">In at felis vel lacus condimentum pellentesque. Phasellus commodo finibus ante eu facilisis. Etiam quis magna nec purus aliquet fermentum. Tincidunt est mauris eget turpis facilisis!</p>
          </div>
          <div className="row">
                <div className="col span-1-of-4 box">

                    <h3>Iniciación</h3>
                    <p>Con la guía del Taita de la comunidad Inga, se abren las puertas del conocimiento ancestral. Llegamos al conocimiento propio, reconociendo nuestra naturaleza y entorno físico y emocional.</p>
                </div>
                <div className="col span-1-of-4 box">

                    <h3>Sanación</h3>
                    <p>La medicina que se encuentra en la naturaleza provee la solución a muchas incógnitas de nuestras generaciones recientes, dolores, angustias, preocupaciones, culpas, expectativas, entre otras.</p>
                </div>
                <div className="col span-1-of-4 box">

                    <h3>Formación</h3>
                    <p>El círculo de formación está encabezado por el programa de Reconexión Femenina, el cual hace una invitación a tu autoconocimiento, para establecer un vínculo amoroso, honesto, compasivo e íntimo contigo.</p>
                    </div>
                <div className="col span-1-of-4 box">

                    <h3>Consulta con Mamo</h3>
                    <p>El Mamo Senchina de la comunidad Kogui nos guía, desde la Sierra Nevada de Santa Marta con los conocimientos de abuelos, nos enseña cómo es el buen vivir y las prácticas espirituales para llegar a la armonía.</p>
                </div>
            </div>

      </section>


      <section className="section-images">
        <ul className="images-showcase">
          <li>
              <figure className="animal-photo">
                  <Image src="/img/2.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/3.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/6.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/5.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
        </ul>
        <ul className="images-showcase">
          <li>
              <figure className="animal-photo">
                  <Image src="/img/6.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/7.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/8.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px" />
              </figure>
          </li>
          <li>
              <figure className="animal-photo">
                  <Image src="/img/9.jpg" alt="" width="800px" height="560px" sizes="(max-width: 500px) 100px"/>
              </figure>
          </li>
        </ul>
      </section>

    </div>
  )
}

