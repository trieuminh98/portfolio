import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from 'components/form-control/input-field';
import InputFieldBigSize from 'components/form-control/input-field-big-size';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from 'components/button/index';

SendMailForm.propTypes = {};

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '20px',
    padding: '10px 20px',
  },
  sendButton: {
      marginTop: "20px"
  }
}));

function SendMailForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().required('Please enter your name'),
    subject: yup.string().required('Please enter your name'),
    message: yup.string().required('Please enter your name'),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField name='name' label='Your Name' form={form} />
        </Grid>
        <Grid item xs={6}>
          <InputField name='email' label='Email' form={form} />
        </Grid>
      </Grid>
      <InputField name='subject' label='Subject' form={form} />
      <InputFieldBigSize name='message' label='Message' size='medium' form={form} />
      <CustomButton className={classes.sendButton} content={'Send'} type={'submit'} />
    </form>
  );
}

export default SendMailForm;
