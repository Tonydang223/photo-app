import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonDropdown,
  Button,
  FormFeedback
} from "reactstrap";
import RandomPhoto from "../../components/RandomPhoto/RandomPhoto";
import { ErrorMessage } from "formik";
const PhotoField = (props) => {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const {errors,touched} = form
  const showErrorMessage = errors[name] && touched[name]
  const onChangeRandom = (newUrl) => {
    form.setFieldValue(name, newUrl);
  };
  return (
    <FormGroup>
      {label && <Label for="photo">{label}</Label>}
      <RandomPhoto
        name={name}
        imgUrl={value}
        onChangeRandom={onChangeRandom}
        onRandomButtonBlur={onBlur}
        showErrorMessage={showErrorMessage}
      />
      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
};
PhotoField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
PhotoField.defaultProps = {
  label: "",
};

export default PhotoField;
