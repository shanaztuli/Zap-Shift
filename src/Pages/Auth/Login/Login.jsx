import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const {signInUser} = useAuth();

const location = useLocation();
const navigate = useNavigate();
    const handleLogin = (data)=>{
      
        console.log('form data',data)
        signInUser(data.email,data.password).then(result=>{
            console.log(result.user);
            navigate(location?.state || '/')
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <p className="text-center">Please Login</p>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />

            {errors.email?.type == "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type == "minLength" && (
              <p className="text-red-600">
                Password must be 6 character or longer
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>New to Zap 
            Shift ?  <Link
            state={location.state}
            to='/register' className='text-green-600 underline'> Register</Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Login;