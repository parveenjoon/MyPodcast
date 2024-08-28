import React, { useState } from 'react'
import Header from '../components/common/Header';
import SignupForm from '../components/SignupComponents/SignupForm';

import LoginForm from '../components/SignupComponents/LoginForm';
import { motion } from "framer-motion";

const SignUpPage = () => {

  const[flag, setFlag] = useState(false);
 
  
  return (
    <div >

    <Header/>
    <div className='landing-page'>
              <div className='left-landpage'>
        {/* img */}       
              </div>
                <div className='input-wrapper right-landpage'>
              {!flag ? <h1 className='signup-signin-heading'>SignUp</h1> : <h1 className='signup-signin-heading'>Login</h1>}
              {!flag ? <SignupForm /> : <LoginForm />}
              {!flag ? (
                <p style={{cursor: "pointer"}} onClick={()=>setFlag(!flag)}>Already have an Account?<span style={{color:'var(--blue)'}}> Click here to Login.</span>  </p>
              ) : (
                <p style={{cursor: "pointer"}} onClick={()=>setFlag(!flag)}> Don't have an account?<span style={{color:'var(--blue)'}}> Click here to signup.</span></p>
                )}
                
              </div>
              <div className='end-right'>
              
</div>
   </div>
  
    </div>
  )
}

export default SignUpPage;



    