import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookModal from "./BookModal";
import Service from "./Service";

const AvailavilAppoinment = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatments, setTreatments] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <div className="mb-10">
        <h4 className="text-primary text-center text-2xl">
          Available Services on {format(date, "PP")}
        </h4>
        <p className="text-center">Please select a service</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service 
            key={service._id} 
            service={service}
              setTreatments={setTreatments}

          ></Service>
        ))}
      </div>
      {treatments && 
        <BookModal date={date} 
          treatments={treatments}>
          setTreatments={setTreatments}
        </BookModal>}
    </div>
  );
};

export default AvailavilAppoinment;
