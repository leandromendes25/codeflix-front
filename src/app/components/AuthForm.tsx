import React from 'react'

type AuthFormProps = {
formType: 'login' | 'register'  | 'forgot';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm: React.FC< AuthFormProps> = ({formType, onSubmit}) => {  
  return;
}
