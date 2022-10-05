import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

const Auth = () => {
  const [isSignup, setisSignup] = useState(false)
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setisSignup(!isSignup)
  }
  const handleSubmit = (e) => {
   e.preventDefault()
   if( !email || !password )
   { alert("Enter email and password") }
   if( isSignup )
   {
    if( !name ){
      alert("Enter a name to continue")
    }
    dispatch( signup({ name, email, password }) )
   }
   else{
      dispatch( login({ email, password }) )
      
   }
  navigate('/')
   
   
  }
  return (
    <section className = "auth-section" >
        { isSignup && <AboutAuth/> }
        <div className = "auth-container-2">
              {!isSignup && <img src = { icon } alt = 'spider' className = 'login-logo'/>}
              <form onSubmit = { handleSubmit }>
                    {
                      isSignup &&(
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                      )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex",justifyContent:'space-between'}}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{color:"#007ac6", fontSize:'13px',cursor:'pointer'}}>forgot password?</p>} 
                        </div>
                        <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                        {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>passwords must contain at least eight<br/> 
                        charcters, including  atleast 1 uppercase<br/> letter,1 number and 1 special charcter </p>}
                    </label>
                    {
                      isSignup && (
                          <label >
                            <p style={{ fontSize:"13px"}}><input type="checkbox" id='check' />Opt-in to receive occasional,<br/> product updates, user research invitations<br/>company announcements, and digests</p>
                          </label>
                      )
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':'Log in'}</button>
                    {
                      isSignup&&(
                        <p style={{color:"#666767", fontSize:"13px"}}>
                            By clicking "Signup",you agree to our<br/>
                            <span style={{color: '#007ac6'}}>terms of service</span>, 
                            <span style={{color: '#007ac6'}}> privacy policy</span> and  
                            <span style={{color: '#007ac6'}}> cookie policy</span>
                        </p>
                      )
                    }
              </form>
              <p>
                  {isSignup?'already have an account?':"Don't have an account?"}
                  <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "log in":"sign up"}</button>
              </p>
        </div>
    </section>
  )
}

export default Auth