import React, { useState} from 'react'
import{ Link} from 'react-router-dom';
import { navlink } from '../data/dummydata';
import { Menu } from "@mui/icons-material";



export const Header = () => {

    const [responsive, setResponsive] = useState(false);
    return (
    <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    {/*
                    <img src={logo} alt="logo" />
                    */}
                     <h2 className="teal-color" data-aos='zoom-in-right'>LS</h2>
                </div>{/*data-aos='fade-right'*/}
                <div className={responsive ? 'hideMenu teal' : "nav"}>
                    {
                        navlink.map((value, i) => (
                            <Link to={value.url} key={i}>
                                {value.text}
                            </Link>
                    ))}
                </div>
                <button className="toggle" onClick={() => setResponsive(!responsive)}>
                    <Menu className="icon"></Menu>
                </button>
            </div>
        </header>

    </>
  )
}
