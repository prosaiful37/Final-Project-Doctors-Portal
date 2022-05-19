import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookModal = ({ treatments, date, setTreatments }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatments;
  const formateDate = format(date, "PP");

  if (loading) {
    return <Loading></Loading>;
  }

  const bookingHandlr = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formateDate,
      slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {


        if(data.success){
          toast( `Appoinment is set ${formateDate} at ${slot}`)
          
        }
        else{
          toast.error( `Your Appoinment already set on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        // to close the modal
        setTreatments(null);
      })
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-center">{name}</h3>
          <form
            onSubmit={bookingHandlr}
            className="grid grid-cols-1 gap-3 mt-3 justify-items-center"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />

            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              disabled
              name="name"
              value={user?.displayName || ""}
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              disabled
              value={user?.email || ""}
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              class="btn btn-secondary-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
