import React from 'react'
import { services } from '../data/dummydata'
import { Heading } from '../common/Heading'


export const Services = () => {
  return (
    <>
      <section className="services">
            <div className="container" >
              <Heading title="Services" />
              <div className="content grid3">
                {services.map( (value, i) => (
                  <div data-aos='flip-left' className="box">
                    <i className='icon-services'>{value.icon}</i>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>

                  </div>
                ))}
              </div>
            </div>
            
        </section>
        <br /><br />
    </>
  )
}
