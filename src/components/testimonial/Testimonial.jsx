import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
// import { Pagination } from 'swiper';
import {Pagination} from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Modiipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum tempora beatae error omnis expedita nesciunt soluta dolores at obcaecati sequi corporis aliquam neque. Est ut velit in ullam cumque.'
  },
  {
    avatar: AVTR2,
    name: 'Andrew Mathews',
    review: 'Dolores maiores veritatis nam nihil sint sapiente accusantium iusto quibusdam eligendi voluptatum, perferendis deleniti inventore, vitae amet iste sequi et quo maiores esse. Voluptatum ad recusandae commodi nisi assumenda.'
  },
  {
    avatar: AVTR3,
    name: 'Jared Williams',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima deleniti similique porro esse officia, itaque non fugiat amet repellat eius?'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Iure assumenda dolore, ab eos repellat explicabo, iusto vel voluptate magnam similique dolorem non, vitae mollitia sed. Ea incidunt  voluptatem, perspiciatis dicta distinctio.'
  },
]


const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar-one" />
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum tempora beatae error omnis expedita nesciunt soluta dolores at obcaecati sequi corporis aliquam neque. Est ut velit in ullam cumque.
            </small> 
        </article> */}
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review"> {review} </small> 
        </SwiperSlide>
          )
        })
      }

     
      </Swiper>
    </section>
  )
}

export default Testimonial
