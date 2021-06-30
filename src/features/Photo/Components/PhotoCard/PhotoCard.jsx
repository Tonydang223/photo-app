import React from "react";
import { Button } from "reactstrap";
import './PhotoCard.scss';

const PhotoCard = (props) => {
  const { photo, onEditClick, onRemovePhotoClick } = props;
  console.log(photo)
  const handleUpdatePhoto = () => {
    if(onEditClick){
      onEditClick(photo)
    }
  }
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
      <div className="photo__over">
        <h3 className="photo_title">{photo.title}</h3>
        <div className="photo_actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleUpdatePhoto}>
              Edit
            </Button>
          </div>
          <div>
            <Button outline size="sm" color="danger" onClick={()=>onRemovePhotoClick(photo)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
