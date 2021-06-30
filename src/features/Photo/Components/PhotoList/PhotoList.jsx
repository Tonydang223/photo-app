import React from 'react'
import {Row,Col} from 'reactstrap'
import PropTypes from 'prop-types'
import PhotoCard from '../PhotoCard/PhotoCard'
const PhotoList = (props) => {
    const {photoList,onEditClick,onRemoveClick} = props
    console.log(photoList);
    return (
      <Row>
         {photoList.map(photo =>{
             return (
                <Col key={photo.title} xs="12" md="6" lg="4">
                <PhotoCard
                photo={photo}
                onEditClick={onEditClick}
                onRemovePhotoClick={onRemoveClick}
                />
 
            </Col>
             )

         })}
      </Row>
    )
}
PhotoList.propTypes ={
    photoList: PropTypes.array,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}
PhotoList.defaultProps = {
    photoList:[],
    onEditClick:null,
    onRemoveClick:null
}

export default PhotoList
