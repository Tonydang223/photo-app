import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import "./RandomPhoto.scss";
const RandomPhoto = (props) => {
  const { name, imgUrl, onChangeRandom, onRandomButtonBlur, showErrorMessage } =
    props;
  const randomPhotos = () => {
    const random = Math.trunc(Math.random() * 200);
    return `https://picsum.photos/id/${random}/300/300`;
  };
  const handleClickrandom = async () => {
    if (onChangeRandom) {
      const randomPhotoPic = randomPhotos();
      onChangeRandom(randomPhotoPic);
    }
  };
  return (
    <>
    <div className="random-photo">
      <div className="random-photo_button">
        <Button
          outline
          name={name}
          color="primary"
          onClick={handleClickrandom}
          onBlur={onRandomButtonBlur}
        >
          Random a photo{" "}
        </Button>
      </div>

      <div className="random-photo_image">
        {imgUrl && <img src={imgUrl} alt="Opps not found...." />}
      </div>
    </div>
    <div className={showErrorMessage ? "is-invalid" : ""}></div>
    </>
    
  );
};
RandomPhoto.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  onChangeRandom: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.defaultProps = {
  imgUrl: "",
  onChangeRandom: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
