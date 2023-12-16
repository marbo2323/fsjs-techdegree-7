import React from "react";
import Photo from "./Photo";

const PhotoList = () => {
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        <Photo />
      </ul>
    </div>
  );
};

export default PhotoList;
