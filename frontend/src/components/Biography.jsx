import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2>Biography</h2> <h5>Who We Are</h5> <p> At Healing Heaven Hospital, we are dedicated to providing compassionate and
            comprehensive care to every individual we serve. Our team of skilled professionals is committed to excellence in
            medical practice and patient-centered care, ensuring that every aspect of your health journey is supported with
            empathy and expertise. With state-of-the-art facilities and a holistic approach to wellness, we strive to create
            a nurturing environment where healing and hope flourish. </p>
          
          <p>We are excited to be enhancing our services with cutting-edge medical technology.</p>
          <p> Our mission is to transform the patient
            experience through innovative treatments and personalized care. We believe in treating the whole person,
            addressing both physical and emotional needs with the utmost dedication. Join us as we advance in our pursuit
            of health and healing, making a difference in the lives of those we care for. </p> <p>We are committed to
              your well-being!</p>
          <p>Healthcare with heart!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
