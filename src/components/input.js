/* eslint-disable linebreak-style */
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

export const FormInput = props => {
  return (
    <FormGroup className="form-group">
      <Label className="form-group__label" id={props.id}>
        {props.label}{' '}
      </Label>
        <Input
            autoComplete={props.autoComplete}
            required={props.isRequired}
            className="form-group__field"
            aria-labelledby={props.id}
            disabled={props.isDisabled}
            name={props.id}
            placeholder={props.placeholder}
            type={props.type}
            onKeyDown={props.onKeyDown}
            onBlur={props.onBlur}
            value={props.value}
            onChange={props.onChange}
        />
    </FormGroup>
  );
};

FormInput.defaultProps = {
  isRequired: true,
  placeholder: '',
  value: ''
};

FormInput.propTypes = {
  autoComplete: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  asterisk: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  phoneCode: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
