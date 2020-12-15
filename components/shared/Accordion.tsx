import React, { useState } from 'react'
import Link from 'next/link'
import item from '../../interfaces'

interface ServicesProps {
    items: item[]
}

export default function Accordion({items}: ServicesProps) {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={index}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
  return (
      <>
        <h2>Accordion</h2>
            <div className="ui styled accordion">
                {renderedItems}
                <h2>{activeIndex}</h2>
            </div>
      </>
  )
}
