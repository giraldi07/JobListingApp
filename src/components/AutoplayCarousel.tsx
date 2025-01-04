import { useEffect, useState } from "react";
import { cardDetails } from "../data/carousel-config";
import CarouselItem from "./CarouselItem";
import "./autoplaycarousel.scss"; // Custom styles for your carousel

export default function AutoplayCarousel() {
  const [offset, setOffset] = useState(0);
  const totalSlides = Object.keys(cardDetails).length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel-container overflow-hidden">
      <div
        className="carousel-track-left flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${offset * 100}%)`, // Left to Right Slide effect
        }}
      >
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={detailKey}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
          />
        ))}
        {/* Duplicate the array for seamless loop */}
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={`duplicate-${detailKey}`}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
          />
        ))}
      </div>

      <div
        className="carousel-track-right  opacity-45 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${offset * 100}%)`, // Right to Left Slide effect
        }}
      >
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={`reverse-${detailKey}`}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
          />
        ))}
        {/* Duplicate the array for seamless loop */}
        {Object.keys(cardDetails).map((detailKey) => (
          <CarouselItem
            key={`reverse-duplicate-${detailKey}`}
            imgUrl={cardDetails[detailKey].imgUrl}
            imgTitle={cardDetails[detailKey].title}
          />
        ))}
      </div>
    </div>
  );
}
