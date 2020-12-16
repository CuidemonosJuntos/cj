//import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Service from '../components/shared/Service'
import item from '../interfaces'


const items: item[] = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS lybrary among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
]



function services(){
    return (
        <>
            <Navbar />
                <br></br>
                <Link href="/">Go to the index page</Link>
                <h2>Servicios</h2>
                <br />
                <Service items={items}/>
            <Footer />
        </>
    )
}

export default services
