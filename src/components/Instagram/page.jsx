import React from "react";


const InstagramSlider = () => {
  return (
    <div className="instagramSlide">
      <div className="imgWrapper w-full overflow-hidden rounded-md
       cursor-pointer group">
        <img
          src="https://i.pinimg.com/736x/a0/6a/eb/a06aebc0656dfcf9259bf4ea3482505c.jpg"
          className="w-full transition-all duration-500 group-hover:scale-105"
          alt="image"
        />
      </div>
    </div>
  );
};

export default InstagramSlider;
