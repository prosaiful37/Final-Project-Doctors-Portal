import React from "react";
import { format } from "date-fns";

const BookModal = ({treatments, date, setTreatments}) => {
  const {_id , name, slots} = treatments;

  const bookingHandlr = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    setTreatments(null);
  } 



  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-center">
            {name}
          </h3>
          <form onSubmit={bookingHandlr} className="grid grid-cols-1 gap-3 mt-3 justify-items-center">

            <input disabled type="text" value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />

            <select name="slot" class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name="name"  placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
            <input type="submit"  class="btn btn-secondary-bordered w-full max-w-xs" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;