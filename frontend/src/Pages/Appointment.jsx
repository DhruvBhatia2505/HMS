import React from "react";
import Hero from "../components/Hero";
import UserAppointment from "../components/UserAppointment";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Healing Heaven Hospital"}
        imageUrl={"/signin.png"}
      />
      <UserAppointment/>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
