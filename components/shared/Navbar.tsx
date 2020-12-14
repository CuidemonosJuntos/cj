import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="sticky">
            <div className="row">
                <div className="logo-black"><Image src="/img/blacklogo.png" alt="logo" width="50px" height="50px" /></div>
                <ul className="main-nav">
                        <li><a href="#">Quiénes Somos</a></li>
                        <li><Link href="/services">Servicios</Link></li>
                        <li><a href="#">Planes</a></li>
                        <li><a href="#">Log In</a></li>
                </ul>
            </div>

      </nav>

  )
}
