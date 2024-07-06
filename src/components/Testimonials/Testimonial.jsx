import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Awarded Best Project out of 150 entries for exceptional development and functionality in my capstone project—an e-commerce website."
    },
    {
      img: profilePic2,
      review:
        "Solved over 250 DSA problems from the Rapid Growth Problemset, enhancing problem-solving skills. Achieved proficiency by solving more than 100 problems on Geeks for Geeks, demonstrating diverse technical skills and strong problem-solving abilities",
    },
    {
      img: profilePic3,
      review:
        "I successfully completed an NPTEL certificate course on Data Structures and Algorithms using Java, gaining hands-on experience in implementing and optimizing key data structures and algorithms. This course enhanced my problem-solving skills and equipped me with essential knowledge in algorithmic analysis and optimization strategies, crucial for software development.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testmonials">
      <div className="t-heading">
        <span>Best Acheivements </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
