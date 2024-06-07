import React from 'react';

export type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({ id, type, label, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={label} className='text-sn font-semibold text-gray-500'>
        {label}
      </label>
      <input type={type} id={id} name={id} placeholder={placeholder} className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
    </div>
  );
};
