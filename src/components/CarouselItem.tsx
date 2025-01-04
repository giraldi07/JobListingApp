import React from "react";

interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imgUrl, imgTitle }) => {
  return (
    <div className="carousel-item flex-shrink-0 px-4">
      <img
        src={imgUrl}
        alt={imgTitle}
        className="w-20 h-20 object-contain filter rounded-md brightness-90 hover:brightness-100 transition-all"
      />
    </div>
  );
};

export default CarouselItem;
