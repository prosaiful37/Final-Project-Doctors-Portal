import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(guser || user);



      const navigate = useNavigate()
      // error message
    let singError;
  
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    //   form handle
    const onSubmit = async (data) => {
      await createUserWithEmailAndPassword(data.email, data.password)
      await updateProfile({ displayName: data.name});
      console.log('update done');
      
    };
  
    if (gerror || error || updateError) {
      return (
        singError = <p className="text-red-500"><small>{error?.message || gerror?.message || updateError?.message}</small></p>
      );
    }
  
    if ( gloading || loading || updating) {
      return <Loading></Loading>;
    }
  
    if (token) {
      console.log(user);
      // navigate('/appoinment')
    }
  
    return (
        <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type Name"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value : true,
                     message: "name is required" 
                  }
                  })}
              />
              <label class="label">
              {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
              
                
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value : true,
                     message: "email is required" 
                  },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'provide a valid email' 
                    }
                  })}
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value : true,
                     message: "password is required" 
                  },
                    minLength: {
                      value: 6,
                      message: 'password must be 6 cheracter' 
                    }
                  })}
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

              {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                
              </label>
            </div>

            {singError}
            <input className="btn w-full max-w-xs" type="submit" value="Sign Up" />
          </form>
          <p className="text-center"><small>Already Have an account? <Link className="text-primary" to="/login">Please Log in</Link> </small></p>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
    );
};

export default Signup;