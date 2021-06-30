import React from "react";
import Banner from "../../../../components/Banner/Banner";
import Image from "../../../../constants/image";
import "./EditPage.scss";
import PhotoForm from "../../../Photo/Components/PhotoForm/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useHistory, useParams } from "react-router-dom";
const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams();
  const editMode = useSelector(state =>{
    const findPhoto = state.photos.find(photo => photo.id === parseInt(photoId));
    console.log({state: state.photos,photoId});
    return findPhoto
  })
  const isAddMode = !photoId

  const initialValues = isAddMode ? {
    title: "",
    categoryId: null,
    photo: "",
  }: editMode
  console.log({photoId})
  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(isAddMode){
          console.log(value);
          const action = addPhoto(value);
          dispatch(action);
        }else{
          const action = updatePhoto(value);
          dispatch(action);
        }

        resolve(true);
        history.push("/");
      }, 2500);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick up your photo" background={Image.PINK_BG} />
      <div className="photo-edit_form">
        <PhotoForm onSubmit={handleSubmit} 
        initialValues={initialValues}
        isAddMode={isAddMode}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
