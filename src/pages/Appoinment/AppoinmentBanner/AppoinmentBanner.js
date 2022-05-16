import React, { useState } from "react";
import Cheir from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";
import bg from "../../../assets/images/bg.png"


const AppoinmentBanner = ({date, setDate}) => {
    
  return (
    <div 
      style={{background: `url(${bg})`,
      backgroundSize: "cover",
    }} 
      class="hero min-h-screen  ">
      <div class="hero-content flex-col lg:flex-row-reverse gap-10">
        <img className="max-w-sm rounded-lg shadow-2xl"
          src={Cheir}
        />
        <div className="gap-10">
            <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
            />
        </div>

      </div>
    </div>
  );
};

export default AppoinmentBanner;
