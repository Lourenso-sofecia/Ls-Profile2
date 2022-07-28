import React from 'react'
import { Heading } from '../common/Heading';
import { contact } from '../data/dummydata';



export const Contact = () => {

    return (
    <>
        <div className="contact">
            <div className="container">
                <Heading title="Contact Me" />
                <div className="content flexsb ">
                    <div className="right ">
                        <form action="https://formspree.io/f/mwkygzrn" method='POST'>
                            <div className="flex">
                                <input data-aos='zoom-in-up' type="text" name='Name' placeholder='Name' required/>
                                <input data-aos='zoom-in-down' type="email" name='Email' placeholder='Email' required/>
                            </div>
                            <input data-aos='zoom-out-up' type="text" name="Subject" placeholder="Subject" required/>
                            <textarea 
                                name="Message" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                required 
                                placeholder='for example: would you like to participate in a Job Interview? / I would like some tips on how the site was made...'
                                data-aos='zoom-out-down'
                            >
                            </textarea>
                            <button data-aos='zoom-in-up' type='submit' target="_blank" className="submit">
                                Submit
                            </button>
                            
                        </form>
                    </div>
                    <div className="left ">
                        {contact.map( (value) => (
                            <div data-aos='zoom-out-down' className="box teal">
                                <i>{value.icon}</i>
                                <p>{value.text1}</p>
                                <p>{value.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};