import { useState } from 'react';
import FormLogin from '../components/FormLogin'
import Hero2 from '../components/Hero2'

function LoginForm() {
    const [user, setUser] = useState({InputEmail:""})
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

  return (
    <div className="text-center pt-5">
      <Hero2 />
    <FormLogin Login={Login} error={error} />
     </div>
   ); 
 }

export default LoginForm;
