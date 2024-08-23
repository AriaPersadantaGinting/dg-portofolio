import { useState } from "react";

const RotatingCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div
        className={`w-64 h-64 bg-white text-black text-center p-4 rounded-lg shadow-lg transform transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <p className="mt-24">Front Side</p>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <p className="mt-24">Back Side</p>
        </div>
      </div>
      <button
        onClick={handleFlip}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Flip Card
      </button>
    </div>
  );
};

export default RotatingCard;
