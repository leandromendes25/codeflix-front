"use client"
import { InputField } from '../InputField';
export default function LoginForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('login')
        e.preventDefault();
      }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-500'>
          New to the app?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Register
          </a>
        </p>
      </div>
    <div className="mt-8 flex flex-col space-y-4 ">
      <InputField id='email' type='email' label='Email' name='email' placeholder='Enter your email'/>
      <InputField id='password' type='password' label='Passowrd' name='password' placeholder='Enter your password'/>
    </div>
    <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0 ">
    <button 
    type="submit" 
    className='flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8'>Login</button>
    </div>
</form>
    )
}
