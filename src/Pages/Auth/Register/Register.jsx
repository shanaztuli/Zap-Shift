import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    console.log( 'after registration' , data.photo[0]);
  const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        //1...    store the image in form data  and get the photo url
        
        const formData = new FormData();
        formData.append('image',profileImg)
//2. send the photo to store and get the url
              const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;
        axios.post(
         image_API_URL,formData
        ).then(res=>{
          console.log("after image upload", res.data.data.url);
          //update user profile  here to firebase
          const userProfile = {
            displayName : data.name,
            photoURL : res.data.data.url
          }
          updateUserProfile(userProfile).then(()=>{
            console.log('User profile update done ');
            navigate(location.state || '/')
          }).catch(err=>{
            console.log(err);
          })
        })


      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
      <h3 className="text-3xl text-center">Welcome To Zap Shift</h3>
      <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">Your Name is required</p>
          )}
          {/* photo field */}

          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />

          {errors.photo?.type === "required" && (
            <p className="text-red-500">Your Photo is required</p>
          )}
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type == "required" && (
            <p className="text-red-500">Password is required</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer{" "}
            </p>
          )}

          {errors.password?.type == "pattern" && (
            <p className="text-red-500">
              Must have at least 6 characters, at least one lowercase and at
              least one uppercase:{" "}
            </p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already Have an Account ?{" "}
          <Link 
          state={location.state}
          to="/login" className="text-green-600 underline">
            {" "}
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
