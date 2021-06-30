import React from "react";
import Banner from "../../../../components/Banner/Banner";
import Image from "../../../../constants/image";
import "./Main.scss";
import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import PhotoList from "../../Components/PhotoList/PhotoList";
import { removePhoto } from "../../photoSlice";
const MainPage = (props) => {
  const selector = useSelector((state) => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(selector)
  console.log("list photos", selector);
  const handleEditPhotos = (photo) => {
    console.log("Edit", photo);
    const editPhotoUrl = `/pictures/${photo.id}`;
    console.log(editPhotoUrl)
    history.push(editPhotoUrl);
  };
  const handleRemovePhotos = (photo) => {
    console.log(photo)
    const photoId = photo.id;
    const action = removePhoto(photoId);
    dispatch(action);

  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo :>>" background={Image.ORANGE_BG} />
      <Container className="text-center">
        <div className="py-5 move">
          <Link to="/pictures/add" className="text-center__inside">
            Add new Photo
          </Link>
        </div>

        <PhotoList
          photoList={selector}
          onEditClick={handleEditPhotos}
          onRemoveClick={handleRemovePhotos}
        />
      </Container>
    </div>
  );
};

export default MainPage;
