import React from 'react'

import { about } from '../data/dummydata';
import { Heading } from '../common/Heading';
import icon from "../data/assets/Lourenço.jpg"
export const About = () => {
  return (
    <>
        <section className="about border-teal">
            <div className="container flex" >
                {about.map( (value, i) => (
                    <>
                        <div className="left">
                            <img className="img" src={icon} alt="" data-aos='fade-down-right' />
                        </div>
                        <div className="right" data-aos='fade-down-left'>
                            <Heading title="About Me" />
                            <p>{value.desc}</p>
                            <p>{value.desc1}</p>

                            <button className="secondBtn">
                                Download CV
                            </button>
                            <a className="link" href="ProfileLSofecia.pdf" download="Lourenço SofeciaCV.pdf">
                                <button className="primaryBtn">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </>
                ))}
            </div>

        </section>
    </>
  )
}
