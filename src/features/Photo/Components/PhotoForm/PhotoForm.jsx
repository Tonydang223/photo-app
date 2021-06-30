import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
// import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Image from "../../../../constants/image";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonDropdown,
  Button,
  Spinner,
} from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custome-fields/InputField";
import SelectField from "../../../../custome-fields/SelectField";
import PhotoField from "../../../../custome-fields/RandomPhotoField/PhotoField";
import * as Yup from "yup";
// PhotoForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
// PhotoForm.defaultProps = {
//   onSubmit: null,
// };
const PhotoForm = (props) => {
  const {initialValues,isAddMode} = props
  const validationSchame = Yup.object().shape({
    title: Yup.string().required("This field must not be empty"),
    categoryId: Yup.string()
      .required("This field must not be empty")
      .nullable(),
    photo: Yup.string().required("This field must not be empty"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchame}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, setFieldValue, isSubmitting } =
          formikProps;
        console.log({ values, errors, touched });

        console.log(values.photo);
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg:nature...."
            />

            <FastField
              id="categoryId"
              name="categoryId"
              label="Category"
              component={SelectField}
              placeholder="Photo Category"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField name="photo" label="Photo" component={PhotoField} />
            <FormGroup>
              <Button color={isAddMode?'primary':'success'}>
                {isSubmitting && <Spinner size='sm'/>}
                {isAddMode ? 'Add to album':'Update your photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
