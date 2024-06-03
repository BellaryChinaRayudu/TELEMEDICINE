import React from "react";
import { GiStethoscope } from "react-icons/gi";
import { FaMicroscope } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";
import "./DoctorsServicesPage.css";

export default function DoctorsServicesPage() {
  return (
    <div className="doctorsServicepage">
      <div className="center-card">
        <GiStethoscope className="icon-sizing" />
        <h1 className="icontext">healthCare Professionals</h1>
        <p className="icontextparagraph">
          trust Health Professionals delivering personalized care and promoting
          wellness with experties and compassion.Our commitment is to exceed
          expections and improve lives with Compreshensive healthcare solutions
        </p>
      </div>

      <div className="center-card">
        <FaMicroscope className="icon-sizing1" />
        <h1 className="icontext">Medical Excellence</h1>
        <p className="icontextparagraph">
          mediacal Excellence epitomizes our commitment:superior
          care,cutting-edges treatment,and unwavering dedicated, ensuring
          optimal health outcomes and patients satisfaction, Trust is to
          delivering unparalleled experties and innovation for your well-being
        </p>
      </div>
      <div className="center-card">
        <BiSolidInjection className="icon-sizing2" />
        <h1 className="icontext">Latest Technologies</h1>
        <p className="icontextparagraph">
          haarnessing the Latest Technologies,we provide cutting-edges solutions
          for precision diagnoses and advance treatment,ensuring superior
          outcomes and patient-centric care.Our commitment to innovation
          empowers us to delivering the highest standards of healthCare
          Excellence..
        </p>
      </div>
    </div>
  );
}
