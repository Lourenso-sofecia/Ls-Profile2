import React from 'react'
import Typewriter from 'typewriter-effect'
import { home } from '../data/dummydata'


export const Hero = () => {
  return (
    <>
        <section className="hero border-teal">
            {home.map( (value, i) => (
                <div className="hero-container" >
                    <h3 className="white" data-aos='fade-up' key={i} >{value.text}</h3>
                    <h2 className="white" >{value.name}</h2>
                    <h1>
                        <Typewriter 
                            options = {{ 
                                strings: [
                                     `${value.full}`,
                                     `${value.front}`,
                                     `${value.back}`,
                                     `${value.design}`], 
                                autoStart: true, 
                                loop: true
                            }}
                        />
                    </h1>
                    <p data-aos='fade-down'>{value.desc}</p>
                    <a className="link" href="ProfileLSofecia.pdf" download="Lourenço SofeciaCV.pdf">
                        <button className="primaryBtn">
                            Download CV
                        </button>
                    </a>
                </div>
            ))}
        </section>
        
    </>
    
  )
}
