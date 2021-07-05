import { yupResolver } from '@hookform/resolvers/yup';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Alert from '@material-ui/lab/Alert';
import CustomButton from 'components/button/index';
import InputField from 'components/form-control/input-field';
import InputFieldBigSize from 'components/form-control/input-field-big-size';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';


SendMailForm.propTypes = {};

const useStyles = makeStyles(() => ({
  sendButton: {
    marginTop: '20px',
  },
  alert: {
    marginBottom: '10px',
  },
}));

function SendMailForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter valid email'),
    message: yup.string().required('Please enter the message'),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = (data) => {
    const SERVICE_ID = 'service_djsc6gq';
    const TEMPLATE_ID = 'template_5hint6b';
    const USER_ID = 'user_QyaJxVd3CrOu81Uw9ikLj';
    const { name, email, message } = data;
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (response) => {
        setOpen(true);
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={matches ? 6 : 12}>
          <InputField name='name' label='Your Name' form={form} />
        </Grid>
        <Grid item xs={matches ? 6 : 12}>
          <InputField name='email' label='Email' form={form} />
        </Grid>
        <Grid item xs={12}>
          <InputField name='subject' label='Subject' form={form} />
        </Grid>
        <Grid item xs={12}>
          <InputFieldBigSize name='message' label='Message' size='medium' form={form} />
        </Grid>
        <Grid item xs={12}>
          <Collapse className={classes.alert} in={open}>
            <Alert
              action={
                <IconButton
                  aria-label='close'
                  size='small'
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
            >
              Send Mail Successful!
            </Alert>
          </Collapse>
        </Grid>
        <Grid item xs={12}>
          <CustomButton className={classes.sendButton} content={'Send'} type={'submit'} iconSVG={<SendIcon />} />
        </Grid>
      </Grid>
    </form>
  );
}

export default SendMailForm;
