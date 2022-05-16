import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import mask from "../../../assets/images/mask.png"
import Testomonial from "./Testomonial";


const Testomonials = () => {
  const Testomonials = [
    {
      _id: 154,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      title: "California",
    },
    {
      _id: 154,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Winson Herry",
      title: "California",
    },
    {
      _id: 154,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Winson Herry",
      title: "California",
    },
  ];
  return (
    <div className="my-20">
        <div className="flex justify-between mb-20">
            <div>
                <p className="text-primary font-bold">Testimonial</p>
                <h4 className="text-3xl">What Our Patients Says</h4>
            </div>
            <div>
                <img className="w-48 h-48" src={mask} alt="" />
            </div>
        </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {Testomonials.map((testomonial) => (
          <Testomonial
            key={testomonial._id}
            testomonial={testomonial}
          ></Testomonial>
        ))}
      </div>
    </div>
  );
};

export default Testomonials;
