import React from "react";
import Chair from "../../../assets/images/chair.png";
import BgImage from "../../../assets/images/bg.png";
import MainButton from "../../Shared/MainButton/MainButton";

const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold leading-snug">Your New Smile Starts <br />
           <span>Here</span> </h1>
          <p class="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
          <MainButton>Get started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
