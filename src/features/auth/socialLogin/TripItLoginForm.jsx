import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { createValidator ,combineValidators, composeValidators ,isRequired } from "revalidate";

const TripItLoginForm = ({handleSubmit}) => {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="TripIt Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="TripIt password"
        />
        <Button fluid size="large" color="green">Login</Button>
      </Segment>
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


export default reduxForm({form: 'tripItLoginForm', validate})(TripItLoginForm);