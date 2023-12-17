import React from "react";

const Photo = ({ photo }) => {
  
  const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
  
  return (
    <li>
      <img
        src={url}
        alt={photo.title}
      />
    </li>
  );
};

export default Photo;