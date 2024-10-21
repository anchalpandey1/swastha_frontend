import React from 'react';
import StartToday from '../components/StartToday/StartToday';
import Navbar from '../components/Navbar/Navbar';
import Start from '../components/StartToday/Start';

const StartT = () => {
  return (
    <div className='bg-white h-screen'>
      <Navbar />
      <Start />
    </div>
  );
};

export default StartT;
