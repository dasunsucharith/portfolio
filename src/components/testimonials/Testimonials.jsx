import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar1.png'
import AVTR3 from '../../assets/avatar1.png'
import AVTR4 from '../../assets/avatar1.png'


function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, natus suscipit laborum odit, distinctio temporibus aperiam, nostrum tempore quisquam dolorum voluptatibus iusto rem numquam enim quia maiores quaerat! Ullam, temporibus.</small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials