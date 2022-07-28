import React from 'react'
import { social } from '../data/dummydata'

export const Footer = () => {
  return (
    <>
        <footer >
            {social.map( (value) => (
                <>
                    <a  href={value.url} target="_blank">
                        <i data-aos='zoom-in-right'>{value.icon}</i>
                    </a>

                </>
            ))}
            <p data-aos='zoom-in-left'>© 2022 Lourenço Sofécia, Inc</p>
        </footer>
    </>
  )
}
