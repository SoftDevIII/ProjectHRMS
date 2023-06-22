function handleLogin(email: string, password: string) {
  const emailRef = document.getElementById(email) as HTMLInputElement;
  const passwordRef = document.getElementById(password) as HTMLInputElement;
  const userData = {
    email: emailRef.value,
    password: passwordRef.value
  };
  return userData;
}

export default handleLogin;