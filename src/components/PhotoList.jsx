import React, { useEffect } from "react";

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoList = ({loading, photos }) => {
  const photoList = photos
    .map(photo => <Photo key={photo.id} photo={photo} />);
  
  return (
    <div className="photo-container">
      {
        loading ?
          <h3>Loading...</h3> :          
          photoList.length > 0 ?
            <>
              <h2>Results</h2>
              <ul>
                  {photoList}
              </ul>
            </> :
            <NotFound />
      }
    </div>
    
  );
};

export default PhotoList;
