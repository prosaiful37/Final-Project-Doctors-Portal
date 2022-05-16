import React from "react";
import img1 from "../../../assets/images/treatment.png";
import MainButton from "../../Shared/MainButton/MainButton";

const Treatment = () => {
  return (
    <div class="hero min-h-screen w-100 ">
      <div class="hero-content flex-col lg:flex-row">
        <img
          
          src={img1}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-10 w-96">
          <h1 class="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <MainButton>Get started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
