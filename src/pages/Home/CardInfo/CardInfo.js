import React from 'react';

const CardInfo = ({img, cardTitle, cardDescription, bgClass}) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl p-4 ${bgClass}`}>
        <figure>
            <img className='w-86 h-86' src={img}  alt="Movie" />

        </figure>
        <div class="card-body">
        <h2 class="card-title text-white ">{cardTitle}</h2>
            <p className='text-white'>{cardDescription}</p>
        </div>
        </div>
    );
};

export default CardInfo;