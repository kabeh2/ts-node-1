import React from 'react';
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  [key: string]: any;
}

const MyTextInput = (props: Props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

  // which we can spread on <input> and also replace ErrorMessage entirely.

  const [field, meta] = useField(props);

  return (
    <>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={props.id || props.name}
      >
        {props.label}
      </label>

      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
