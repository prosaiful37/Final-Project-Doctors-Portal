import React from "react";
import {useEffect} from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import useToken from '../../hooks/useToken';
import { Link , useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const [token] = useToken(user || guser);




  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from , navigate])




  // error message
  let singError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   form handle
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  if (gerror || error) {
    return (
      singError = <p className="text-red-500"><small>{error?.message || gerror?.message}</small></p>
    );
  }

  if ( gloading || loading) {
    return <Loading></Loading>;
  }

  

  //   handle form

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

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
            <input className="btn w-full max-w-xs" type="submit" value="Login" />
          </form>
          <p className="text-center"><small>New to Doctors Portal? <Link className="text-primary" to="/signUp">Create New Account</Link> </small></p>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
