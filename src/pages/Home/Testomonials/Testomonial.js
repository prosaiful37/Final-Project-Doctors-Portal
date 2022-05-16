import React from "react";

const Testomonial = ({ testomonial }) => {
  return (
    <section>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <p>{testomonial.description}</p>
          </div>
          <div className="flex justify-center items-center gap-2 p-5">
            <div>
              <figure>
                <img className="w-75 h-75 border-4 border-primary rounded-full"
                  src={testomonial.img}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div>
                <h5>{testomonial.name}</h5>
                <p>{testomonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
