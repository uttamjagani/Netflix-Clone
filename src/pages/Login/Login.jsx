import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [sign, setSign] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(sign==="Sign In"){
      await login(email,password);
    }else{
      await signup(name,email,password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="loading">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{sign}</h1>
        <form>
          {sign === "Sign Up" ? 
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' /> : <></>}
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button onClick={user_auth} type='submit'>{sign}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="from-switch">
          {sign === "Sign In"
            ? <p>New To Netflix? <span onClick={()=>{setSign("Sign Up")}}>Sign Up Now</span></p>
            : <p>Already Have An Account? <span onClick={()=>{setSign("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login