import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Header } from "semantic-ui-react";
import TextInput from '../../../app/common/form/TextInput';
import { combineValidators, isRequired } from "revalidate";

const RegisterForm = ({invalid, pristine, submitting}) => {
  return (
    <Segment>
    <Form>
    <Header sub color="teal" content="General Info" />
        <Field
          name="fullName"
          type="text"
          component={TextInput}
          placeholder="Enter Your Full Name"
        />
        <Field
          name="userName"
          type="text"
          component={TextInput}
          placeholder="UserName" 
        />
        <Field
          name="email"
          type="text"
          component={TextInput}
          placeholder="Email Address" 
        />
        <Header sub color="teal" content="Password" />
        <Field
          name="password"
          type="text"
          component={TextInput}
          placeholder="Password" 
        />
        <Field
          name="password2"
          type="text"
          component={TextInput}
          placeholder="Retype Password" 
        />
        <Button disabled={invalid || pristine || submitting }  fluid size="large" color="teal">Register</Button>
    </Form>
    </Segment>

  )
}

// Validation
const validate = combineValidators({
  fullName: isRequired({message: 'Please enter your full name'}),
  userName: isRequired({message: 'Please enter your username'}),
  email: isRequired('email'),
  password: isRequired({message: 'Password is needed'}),
  password2: isRequired({message: 'Password is needed'})
})



export default reduxForm({form: 'registerForm', validate})(RegisterForm);
