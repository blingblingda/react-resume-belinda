import React from "react";
import Client from "./Client";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    id: "avtr1",
    img: AVTR1,
    name: "Susan (Accounting manager)",
    comment:
      "Belinda is an easy going person with high efficiency and quick response.  She is a quick learner and willing to spend time to improve her professional skills. In the work, she can help each other with colleagues, never mean to share her experience and listen to others' suggestions carefully. She always takes an active part in the department activities and is a very popular employee.",
  },
  {
    id: "avtr2",
    img: AVTR2,
    name: "Sherry (Colleague)",
    comment:
      "Working with Belinda makes me feel very comfortable, because she has a warm and cheerful personality and is very careful and responsible in her work. She has a strong sense of time and can finish the work on time with quality and quantity. She is also a good team player with excellent team spirit and communication skills.",
  },
  {
    id: "avtr3",
    img: AVTR3,
    name: "Amy (Client)",
    comment:
      "Thanks Belinda for giving me advices of courses and universities selection. The whole process from course application to visa application was really smooth and efficient. As a student studying nursing at VIC, I can say it's one of the best decisions I have made. I am enjoying my uni life in Melbourne!.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client) => (
          <SwiperSlide>
            <Client
              id={client.id}
              image={client.img}
              name={client.name}
              comment={client.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
