import { signup as signupValues } from 'echess/models';
import React, { useRef } from 'react';
import { signup } from 'echess/controllers/identity';
import { Field, Form, Formik } from 'formik';
import Input from '../Fields/Input';
import { Fieldset, Recaptcha } from 'echess/components/Forms';
import { Translate } from 'echess/components';
import { Submit } from 'echess/components/Buttons';
import { Password } from '../Fields';

const SignupForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await signup(ref, values);
  };

  return (
    <Formik {...signupValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <Fieldset name="name" label={<Translate>Name</Translate>}>
          <Field name="name" type="text" as={Input} />
        </Fieldset>
        <Fieldset name="email" label={<Translate>Email address</Translate>}>
          <Field name="email" type="email" as={Input} />
        </Fieldset>
        <Fieldset
          name="password"
          label={<Translate>Password</Translate>}
          help={
            <span className="text-sm text-gray-600">
              <Translate>Choose a safe password with at least 8 characters</Translate>
            </span>
          }
        >
          <Field name="password" as={Password} />
        </Fieldset>
        <Fieldset
          name="phone"
          label={<Translate>Phone</Translate>}
          help={
            <span className="text-sm text-gray-600">
              <Translate>Optional info</Translate>
            </span>
          }
        >
          <Field name="phone" type="tel" as={Input} />
        </Fieldset>
        <Submit className="button full primary -mr-0.5">
          <Translate>Signup</Translate>
        </Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default SignupForm;
