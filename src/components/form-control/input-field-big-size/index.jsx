import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputFieldBigSize.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const ValidationTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
        backgroundColor: '#fff',
        borderRadius: '10px',
        height: "200px",
        alignItems: "unset"
    },
    marginTop: "10px",
    height: "220px"
  },
})(TextField);

function InputFieldBigSize(props) {
  const { form, name, label} = props;
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
      render={({ field }) => (
        <ValidationTextField
          {...field}
          variant='filled'
          fullWidth
          label={label}
          name={name}
          error={hasError}
          multiline={true}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputFieldBigSize;
