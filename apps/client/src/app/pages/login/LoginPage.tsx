import Input from '@shared-components/Input';
import SubmitButton from '@shared-components/SubmitButton';
import { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState<FormLoginData>({
    userName: '',
    password: ''
  });

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-screen grid place-items-center content-center'>
      <form
        className='flex gap-3 flex-col justify-center items-center p-5 bg-gradient-to-r from-slate-700/80 to-slate-900/20 rounded-2xl shadow-2xl md:w-auto landscape:md-auto landscape:flex-row landscape:md:flex-col'
        onSubmit={handleSubmit}
      >
        <p className='text-white px-16 text-2xl font-bold'>Login</p>
        <div className='flex flex-col gap-1'>
          <Input
            name='userName'
            value={formData.userName}
            onChange={event => onChange(event)}
          >
            Email:
          </Input>
          <Input
            name='password'
            value={formData.password}
            onChange={event => onChange(event)}
            isPassword
          >
            Password:
          </Input>

          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
