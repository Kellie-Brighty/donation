import React from "react";
import photo1 from '../assets/dog1.jpg'
import photo2 from '../assets/dog2.jpg'
import photo3 from '../assets/dog3.jpg'
import photo4 from '../assets/dog4.jpg'
import photo5 from '../assets/dog5.jpg'

const Photos = () => {
  return (
    <div className="py-10 flex justify-center w-full">
      <div className="flex gap-8 flex-wrap">
    <img className="w-60 h-60" src={photo1} alt="" />
    <img className="w-60 h-60" src={photo2} alt="" />
    <img className="w-60 h-60" src={photo3} alt="" />
    <img className="w-60 h-60" src={photo4} alt="" />
    <img className="w-60 h-60" src={photo5} alt="" />
      </div>
    </div>
  );
};

export default Photos;
