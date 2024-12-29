import React from "react";

const EventPage = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zq-hvaiIkr58DpGjZvfdaCruxdk6gNCu9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICzAW7PnFZWxxNl5u1wUrygPgp2DJz4sXXQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vJfDFa5zTpyPNIrK2N28Di92GCwC6xlvZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNesrQZ7hXf1VL1sQiwwLcDbVutP83ETPmog&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1z1i1doy67D0LunrhXNgniyHioaRJOIXCA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtq05ZMiuORVWadDIXE8_9IV4BRfs3rC72Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIWjlDkrkoPG7HyEKGnTcDpEjj6NflURqaw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMrPPnFFbVizly-fiD69fHGY-2gnHV5mW3w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfIfyBZDvJdONP5vrtPe7RgHbu_2uSVlAuw&s",
  ];

  return (
    <div className="min-h-screen bg-transperent-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center mt-[-300px]">
      <h1 className="text-4xl text-white font-bold mb-12">Event Gallery</h1>

      {/* Scrolling Images Left to Right */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-12 animate-scrollLeft">
          {images.concat(images).map((src, index) => (
            <img
              key={`left-${index}`}
              src={src}
              alt={`Left to Right ${index}`}
              className="w-380 h-380 rounded-lg border-2 border-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Scrolling Images Right to Left */}
      <div className="w-full overflow-hidden mt-12">
        <div className="flex gap-12 animate-scrollRight">
          {images.concat(images).map((src, index) => (
            <img
              key={`right-${index}`}
              src={src}
              alt={`Right to Left ${index}`}
              className="w-380 h-380 rounded-lg border-2 border-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
