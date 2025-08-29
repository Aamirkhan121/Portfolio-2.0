import React, { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

const servicesData=[
  {
    "title": "Web Development",
    "icon": "/images/icon-dev.svg",
    "description": "I'm actively honing my skills by building projects with the MERN stack, focusing on both frontend and backend development to create complete web applications."
  },
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "Front-end Developer",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the fresher level."
  },
  // {
  //   "title": "Photography",
  //   "icon": "/images/icon-photo.svg",
  //   "description": "I make high-quality photos of any category at a professional level."
  // }
]


const About = () => {
  const[testimonials,setTestimonials]=useState([])
  useEffect(()=>{
    fetch('testimonials.json').then(res=>res.json()).then(data=>{
      console.log(data)
      setTestimonials(data)
    })
  },[])
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section>
        <p>
          "As a Full Stack MERN Developer with 1 year of experience, I specialize in designing and developing scalable web applications using MongoDB, Express.js, React.js, and Node.js. I have hands-on expertise in both front-end and back-end development, RESTful APIs, and database management. I am passionate about writing clean, efficient code, implementing modern UI/UX practices, and delivering end-to-end solutions. With strong problem-solving skills and a continuous learning mindset, I am committed to building high-quality applications that enhance user experience and meet business goals."
        </p>
      </section>
      {/* service */}

      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="">
          {
            servicesData.map((service,index)=>(
              <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>
      </section>

      {/*testimonials section*/}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial,i)=>
        <Testimonial key={i} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
        )}
        </ul>

      </section>
    </div>
  );
};

export default About;
