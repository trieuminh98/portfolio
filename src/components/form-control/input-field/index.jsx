import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const CustomTextField = withStyles({
    root: {
      '& input': {
          backgroundColor: '#fff',
          borderRadius: '10px'
      },
      height: "60px"
    },
  })(TextField);
function InputField(props) {
  const { form, name, label } = props;
  const {
    control,
    register,
    formState: { errors },
  } = form;
  const hasError = !!errors[name];

  return (
    <Controller
      name={name}
      control={control}
      {...register(name)}
      render={({ field }) => <CustomTextField {...field} margin='normal' variant='filled' fullWidth label={label} name={name} error={hasError} helperText={errors[name]?.message}/>}
    />
  );
}

export default InputField;
