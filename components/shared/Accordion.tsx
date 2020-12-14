import Link from 'next/link'
import services from '../../pages/services'
import item from '../../interfaces'

interface ServicesProps {
    items: item[]
}

export default function Accordion({items}: ServicesProps) {

    const renderedItems = items.map(item => {
        return (
            <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        )
    })
  return (
      <div>
        <h2>Accordion</h2>
        {renderedItems }
      </div>

  )
}
