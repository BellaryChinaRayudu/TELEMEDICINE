import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import DoctorsServicesPage from "../DoctorsServicesPage/DoctorsServicesPage";
import DoctorAppointment from "../DoctorAppointment/DoctorAppointment";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="">
        <div className="frist-containor">
          <h1 className="frist-containor-text">TELIMEDICINE GROUP</h1>
          <p className="frist-containor-text">
            Provide best quality healthcare for you
          </p>
          <p className="frist-containor-text">
            Welcome to Telimedicine ,where we dedicated to provide high-quality
            healthcare services.
            <br />
            our mission is to ensure that every patient recevies personalized
            care and attention for their well-being.
          </p>
        </div>
        <hr className="blue-line" />
        {/* {cards container starts here} */}
        <div className="second-containor Home-card-flex">
          <div className="card">
            <Link to="/qulified-doctor" className="card-frist-heading">
              {" "}
              Qulifed Doctor
            </Link>
            <h1>Where People Come Frist</h1>
            <p>
              a Qulifed Doctor Possesses extensive medical traning and
              exertise,Capable of providing accurate diagnoses personalized
              treatment plans,and compassionate care to patients,ensuring their
              well-being and health
            </p>
          </div>
          <div className="card card-space">
            <Link to="/24hours-service" className="card-frist-heading">
              24hours service
            </Link>
            <h1>Highest Quality Ever</h1>
            <p>
              A highly skilled and qualifieed doctor offering rond-the-clock
              service,delivering unparalleled medical care with an unwavering
              commitment to patient safety and satisfaction. ensuring the
              highest quality healthcare experience possible....
            </p>
          </div>
          <div className="card card-space">
            <Link to="/24hours-service" className="card-frist-heading">
              we are here for you
            </Link>
            <h1>we are here for you</h1>
            <p>
              we are here for you.Our Emergency Department stands ready 24/7 to
              provide immediate,expert care in itmes of crisis
            </p>
          </div>
        </div>
        {/* Doctors services Pages */}
        <div className="third-containor">
          <DoctorsServicesPage />
          {/* doctorsServicepage ends here */}
        </div>
        {/* doctorsAppointment Page starts here */}
        <DoctorAppointment />
        {/* doctorsAppointment Page ends here */}
        {/* footer starts Here */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
