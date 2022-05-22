import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookModal from "./BookModal";
import Service from "./Service";
import Loading from "../Shared/Loading/Loading";
import {useQuery } from 'react-query'

const AvailavilAppoinment = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);
  const [treatments, setTreatments] = useState(null);


  const formatedDate = format(date, 'PP');

  const {data: services, isLoading, refetch} = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
  .then((res) => res.json())
  )

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);
  return (
    <div className="my-20">
      <div className="mb-10">
        <h4 className="text-primary text-center text-2xl">
          Available Services on {format(date, "PP")}
        </h4>
        <p className="text-center">Please select a service</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {services?.map((service) => (
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
          refetch={refetch}
        </BookModal>}
    </div>
  );
};

export default AvailavilAppoinment;
