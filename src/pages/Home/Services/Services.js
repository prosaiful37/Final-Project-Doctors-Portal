import React, { useEffect, useState } from "react";
import Service from "./Service";
import service1 from "../../../assets/images/fluoride.png";
import service2 from "../../../assets/images/cavity.png";
import service3 from "../../../assets/images/whitening.png";



const Services = () => {
 const services = [
  {
    _id: "12355",
    name: "Fluoride Treatment",
    description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: service1
  },
  {
    _id: "1235415",
    name: "Cavity Filling",
    description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: service2
  },
  {
    _id: "12355",
    name: "Teeth Whitening",
    description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: service3
  }
 ]
  
  return (
    <div className=" my-28">
        <div className="mb-5">
            <p className="text-center uppercase  font-bold text-primary">Our Services</p>
            <h2 className="text-center text-3xl">Services We Provide</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
              services.map(service => <Service
                key={service._id}
                service={service}
              ></Service>)
            }
           
        </div>
        
    </div>
  );
};

export default Services;
