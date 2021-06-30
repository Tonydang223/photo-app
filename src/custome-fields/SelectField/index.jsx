import React from 'react'
import PropTypes from 'prop-types';
import Select from "react-select";
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
const SelectField = (props) => {
    const {field,form,label,placeholder,type,disabled,options} = props
    const{name,onChange,onBlur,value} = field
    const {errors,touched} = form
    const showErrorMessage = errors[name] && touched[name]
    const selectedOptionsValues = options.find(opt => opt.value === value);
    const handleSelectedOptionsChange = selectedOptions =>{
      const selected = selectedOptions ? selectedOptions.value : selectedOptions;
      const changeEvent = {
          target:{
              name:name,
              value:selected
          }
      }
      console.log(selected);
      field.onChange(changeEvent);
    }
    return (
        <FormGroup>
        {label&&<Label for="titleId">{label}</Label>}
        <Select 
        type={type}
        // disabled={disabled}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
        // name={name} === {...field}
        {...field}
        value={selectedOptionsValues}
        onChange={handleSelectedOptionsChange}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        className={showErrorMessage?'is-invalid':''}
        />
        <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
    )
}
SelectField.propTypes ={
    field: PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    type: PropTypes.string,
    lable:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
    options:PropTypes.array
}
SelectField.defaultProps = {
    type:'text',
    lable:'',
    placeholder:'',
    disabled:false
}


export default SelectField
