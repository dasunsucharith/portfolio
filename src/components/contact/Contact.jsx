import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>sucharith.dasun@gmail.com</h5>
                        <a href="mailto:sucharith.dasun@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>Dasun Sucharith</h5>
                        <a href="https://m.me/dasun.sucharith" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>+94 071 361 3974</h5>
                        <a href="https://api.whatsapp.com/send?phone+94713613974" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact