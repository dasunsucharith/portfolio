import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar1.png'
import AVTR3 from '../../assets/avatar1.png'
import AVTR4 from '../../assets/avatar1.png'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni inventore explicabo corrupti totam! Sed porro nisi aliquid, nihil optio, soluta doloremque quidem libero iusto dolorum alias ipsam ea ullam!',
  },
  {
    avatar: AVTR2,
    name: 'John Knight',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni inventore explicabo corrupti totam! Sed porro nisi aliquid, nihil optio, soluta doloremque quidem libero iusto dolorum alias ipsam ea ullam!',
  },
  {
    avatar: AVTR3,
    name: 'Rebecca Rubasinghe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni inventore explicabo corrupti totam! Sed porro nisi aliquid, nihil optio, soluta doloremque quidem libero iusto dolorum alias ipsam ea ullam!',
  },
  {
    avatar: AVTR4,
    name: 'Pasindu Akalanka',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni inventore explicabo corrupti totam! Sed porro nisi aliquid, nihil optio, soluta doloremque quidem libero iusto dolorum alias ipsam ea ullam!',
  }
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination, Autoplay ]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{delay:5000}}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials