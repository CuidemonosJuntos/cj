import React, { useState } from 'react'
import Link from 'next/link'
import item from '../../interfaces'

interface ServicesProps {
    items: item[]
}

const Service = (props: ServicesProps): JSX.Element => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index: number): void => {
        setActiveIndex(index)
    }

  return (
    <section className="section-plans">
        <div className="row">
            <div className="col span-1-of-2">
                <div className="plan-box">
                    <div>
                        <h3>Free</h3>
                        <p className="plan-price">Circulo Iniciático</p>
                        <p className="plan-price-service">Cuatro sesiones</p>
                    </div>
                    <div>
                        <ul>
                        <li>Cras ultricies</li>
                        <li>Cras ultricies</li>
                        <li>Cras ultricies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col span-1-of-2">
                <div className="plan-box">
                    <div>
                        <h3>Avanzado</h3>
                        <p className="plan-price">Circulo de Sanación</p>
                        <p className="plan-price-service">Cuatro sesiones</p>
                    </div>
                    <div>
                        <ul>
                        <li>Cras ultricies</li>
                        <li>Cras ultricies</li>
                        <li>Cras ultricies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service;
