import React from "react";
import Services from "./Services";

const Service = ({ service }) => {
  return (
    <div class="card lg:w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          className="w-116 h-115 "
          src={service.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
