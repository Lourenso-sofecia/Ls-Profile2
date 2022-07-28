import React from 'react'

import { Heading } from '../common/Heading'
import {citacoes} from '../data/dummydata';

export const Citacoes = () => {
  return (
    <>
      <section className="blog ">
        <div className="container ">
          <Heading title="Quotes"/>
          
          <div className="content grid3">
          {citacoes.map((value) => {
            return(
                <div data-aos='flip-left' className="box">
                  <div className="img" data-aos='flip-right'>
                    <img src={value.cover} alt="" data-aos='flip-down' />
                  </div>
                  <div className="text">
                    <h3 data-aos='flip-left' className="white">{value.title}</h3>
                    <label data-aos='flip-right' htmlFor="">
                      By <span className="teal"> {value.author}</span> <span className="teal">{value.data} </span>
                    </label>
                    <h3 data-aos='fade-up-left' className="white">{value.desc}</h3>
                  </div>
                </div>
            );
            })}
          </div>
        </div>
      </section>
    </>
  )
}
