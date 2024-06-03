import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./BookAppointment.css";

export default function BookAppointment() {
  const [formData, setFormData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [time, setTime] = useState("");
  const [combinedTime, setCombinedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_f24352s", "template_8ped64n", form.current, {
        publicKey: "3BSh4FwmsTyP7ihVo",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    const year = date.getFullYear();
    const date1 = date.getDate();
    const month = date.getMonth();
    setCombinedTime(date1 + "/" + month + "/" + year);
  };

  return (
    <>
      {success ? (
        <div>
          <h1>You are successfull registered.</h1>
          <br />
          <h1>
            Meeting details has been successfully sent to your registered Email.
          </h1>
          <br />
          <p>Please check the details and join the meeting on time.</p>
          <br />
        </div>
      ) : (
        <div>
          <h1>Book your Appointment</h1>
          <form className="form" ref={form} onSubmit={handleSubmit}>
            <h1>Name</h1>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
            />
            <h1>Whatsapp Number</h1>
            <input
              className="input"
              type="text"
              id="mobilenumber"
              name="mobile number"
              placeholder="Your Mobile"
              onChange={handleChange}
            />
            <h1>Email</h1>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
            />
            <h1>Select A Date</h1>
            <DatePicker
              className="input"
              name="date"
              selected={startDate}
              onChange={handleDateChange}
            />
            <h1>Select A Time</h1>
            <input
              type="text"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter your preferred time with am/pm."
              className="input"
            />
            <h1>Description</h1>
            <textarea
              className="input"
              type="text"
              name="description"
              rows="4"
              columns="50"
              id="description"
              placeholder="Write something about your Health problem."
              onChange={handleChange}
            >
              Write something about your Health problem.
            </textarea>
            <input type="text" value={combinedTime} name="date1" hidden />

            <button
              type="submit"
              onChange={handleChange}
              className="btn btn-primary button"
            >
              Book Appointment
            </button>
          </form>
        </div>
      )}
    </>
  );
}
