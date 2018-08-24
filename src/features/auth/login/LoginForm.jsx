import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import SocialLogin from '../socialLogin/SocialLogin';
import { createValidator ,combineValidators, composeValidators ,isRequired } from "revalidate";
import { login } from '../authActions';

const actions = {
  login
}

const LoginForm = ({handleSubmit, login}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} >
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">Sign In</Button>
      </Segment>
      <Divider/>
      <SocialLogin/>
    </Form>
  )
}


// Validation
const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
)

const validate = combineValidators({
  email: composeValidators(
    isValidEmail,
    isRequired({message: 'Please enter your email'})
  )(),
  password: isRequired('password')
})


export default connect(null, actions)(reduxForm({form: 'loginForm', validate})(LoginForm));
