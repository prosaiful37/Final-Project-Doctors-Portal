import React from 'react';
import formBg from "../../../assets/images/appointment.png"
import MainButton from '../../Shared/MainButton/MainButton';

const Form = () => {
    return (
        <div style={{background: `url(${formBg})`}}
          className="p-20 my-5">
             <div className = "lg:w-80 mx-auto">
                <div className='my-3 text-center'>
                    <p className='font-bold text-primary'>Contact Us</p>
                    <h4 className='text-3xl text-white'>Stay Connected With Us</h4>
                </div>
                <form action="">
                     <div className='from-group mb-3'>
                        <div class="form-control">
                            <input type="email" placeholder="Your email" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='from-group mb-3'>
                        <div class="form-control">
                        <input type="subject" placeholder="subject" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='from-group mb-3'>
                        <div class="form-control">
                            <textarea class="textarea" placeholder="message"></textarea>
                        </div>
                    </div>
                    <div className='from-control'>
                        <MainButton >Submit</MainButton>
                    </div> 
                    

                     
                    
                </form>
             </div>
           
        </div>
    );
};

export default Form;