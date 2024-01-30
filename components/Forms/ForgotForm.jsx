import { Translate } from 'echess/components';
import { Submit } from 'echess/components/Buttons';
import { Fieldset, Recaptcha } from 'echess/components/Forms';
import { forgot } from 'echess/controllers/identity';
import { forgot as forgotValues } from 'echess/models';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import { Email } from '../Fields';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values, helpers) => {
    await forgot(ref, values, helpers);
  };

  return (
    <Formik {...forgotValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <Fieldset name="email" className="mb-4" label={<Translate>Email address</Translate>}>
          <Field name="email" as={Email} autoFocus={true} />
        </Fieldset>

        <Submit className="button full primary -mr-0.5">
          <Translate>Recover password</Translate>
        </Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
