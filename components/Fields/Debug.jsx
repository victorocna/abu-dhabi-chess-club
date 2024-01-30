import { useFormikContext } from 'formik';

const Debug = () => {
  const formikContext = useFormikContext();

  // Only show the debug component in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (!isDevelopment) {
    return null;
  }

  return (
    <pre className="text-sm font-mono p-4 lg:px-8 bg-red-200">
      {JSON.stringify(formikContext, null, 2)}
    </pre>
  );
};

export default Debug;
