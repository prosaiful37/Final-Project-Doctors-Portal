import React from "react";

const Service = ({ service, setTreatments }) => {
    const {name, slots} = service
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">{name}</h2>
        <p>{
          slots.length > 0 
          ? <span>{slots[0]}</span>
          :<span className="text-red-500">No Slot Avaiable</span>
          }</p>
        <p className="uppercase">{slots.length} {slots.length > 1 ? 'space': 'space'} available</p>
        <div class="card-actions justify-center">
          <label for="booking-modal" 
            disabled={ slots.length === 0 }
            onClick={() => setTreatments(service)}
            class="btn btn-primary text-uppercase">Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
