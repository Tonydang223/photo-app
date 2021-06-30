import React from 'react'
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import {ErrorMessage} from 'formik'




const InputField = (props) => {
    const {field,form,label,placeholder,type,disabled} = props
    const{name,onChange,onBlur,value} = field
    const{errors,touched} = form;
    const showErrorMessage = errors[name] && touched[name];
    return (
        <FormGroup>
        {label&&<Label for="titleId">{label}</Label>}
        <Input 
        type={type}
        // disabled={disabled}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
        // name={name} === {...field}
        {...field}
        id={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showErrorMessage}
        />
        <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
    )
}
InputField.propTypes ={
    field: PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    type: PropTypes.string,
    lable:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
}
InputField.defaultProps = {
    type:'text',
    lable:'',
    placeholder:'',
    disabled:false
}
export default InputField
