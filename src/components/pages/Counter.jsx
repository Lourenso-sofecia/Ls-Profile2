import React from 'react'
import { project } from '../data/dummydata'

import CountUp from "react-countup";

export const Counter = () => {
  return (
    <>
        <div className="hero counter">
            <div className="container grid3 grid4">
                {project.map((value, i) => (
                    <div  className="box ">
                        <i>{value.icon}</i>
                        <h1 className="heading">
                            <CountUp enableScrollSpy duration={1} end= {value.num} />    
                        </h1>
                        <h3>{value.desc}</h3>
                    </div>
                ))

                }
            </div>
        </div>
    </>
  )
}
