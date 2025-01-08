import React from 'react';
import UnderProcessImg from '../../assets/Images/underProcess.jpg'; // Ensure the correct path to your image

const UnderProcess = () => {
  return (
    <div className="under-process-container">
      <div className="under-process-content">
        <h1>We Are Working On It!</h1>
        <p>Our website is currently under process and will be up and running soon. Stay tuned!</p>
        <img src={UnderProcessImg} alt="Under Process" className="under-process-img" />
        <p>Thank you for your patience.</p>
      </div>
    </div>
  );
};

export default UnderProcess;
