import React from "react";
import "./DoctorAppointment.css";

export default function DoctorAppointment() {
  return (
    <>
      <h1 className="doctors-heading">OUR DOCTORS</h1>

      <div className="flex-doctors-card">
        <div className="card">
          <img
            alt=""
            className="image-sizing"
            src="https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h1>Dr.1</h1>
          <p>Position</p>
          <button className="btn btn-primary">Make appointment</button>
        </div>
        <div className="card">
          <img
            alt=" "
            className="image-sizing"
            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h1>Dr.3</h1>
          <p>Position</p>
          <button className="btn btn-primary">Make appointment</button>
        </div>

        <div className="card">
          <img
            alt=" "
            className="image-sizing"
            src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h1>Dr.3</h1>
          <p>Position</p>
          <button className="btn btn-primary">Make appointment</button>
        </div>
        <div className="card">
          <img
            alt=" "
            className="image-sizing"
            src="https://images.pexels.com/photos/7904410/pexels-photo-7904410.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
          <h1>Dr.4</h1>
          <p>Position</p>
          <button className="btn btn-primary">Make appointment</button>
        </div>
      </div>
    </>
  );
}
