import React from 'react';

const HouseCard = ({ image, description, likes, address }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <img src={image} alt="Imagen de ejemplo" className="w-full h-32 object-cover mb-4" />
      <p className="text-white mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-400 mr-2">Likes</span>
          <span className="text-white">{likes}</span>
        </div>
        <div>
          <span className="text-gray-400 mr-2">Dirección</span>
          <span className="text-white">{address}</span>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
