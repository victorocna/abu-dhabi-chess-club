import { Translate } from 'echess/components';
import { Submit } from 'echess/components/Buttons';
import { Fieldset, Recaptcha } from 'echess/components/Forms';
import { Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { login as loginValues } from 'echess/models';
import { login } from 'echess/controllers/identity';
import Link from 'next/link';
import { Input, Password } from '../Fields';

const LoginForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await login(ref, values);
  };

  return (
    <Formik {...loginValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <Fieldset name="email" label={<Translate>Email address</Translate>}>
          <Field name="email" type="email" as={Input} autoFocus />
        </Fieldset>
        <div className="relative">
          <Fieldset name="password" label={<Translate>Password</Translate>}>
            <Field name="password" as={Password} />
          </Fieldset>
          <Link href="/forgot">
            <a className="text-indigo-700 text-sm no-underline font-semibold absolute top-0 right-0">
              Forgot password?
            </a>
          </Link>
        </div>
        <Submit className="button full primary -mr-0.5">Login</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
