import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
// import axios from "axios";
import login from '../../Images/Login/loginimage.png';
import Loading from '../Share/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = async data => {
    const email = data.email;
    await signInWithEmailAndPassword(data.email, data.password);
    
    // const { accessToken } = await axios.post(
    //   "https://boxberry.onrender.com/login",
    //   {
    //     email,
    //   }
    // );
    // console.log(accessToken);
  };

  return (
    <div
      style={{
        background: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-geometric-gradient-creative-blood-donation-poster-background-material-image_134137.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen"
    >
      <div className="flex justify-center  ">
        <div className="flex justify-center mt-8 ">
          <div className="card w-96  bg-violet-700  shadow-2xl">
            <div className="card-body">
              <div className="flex justify-center">
                {' '}
                <img className="h-20 w-20" src={login} alt="" />
              </div>
              {/* <h2 className="text-center text-2xl font-bold">Login</h2> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered bg-white w-full max-w-xs"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is Required',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered bg-white w-full max-w-xs"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is Required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn btn-primary w-full text-white"
                  type="submit"
                  value="Login"
                />
              </form>

              <div className="divider text-white">OR</div>
              <p className="text-white">
                <small>New to Blood bank ? </small>
              </p>
              <Link
                to="/createAccount"
                className="btn btn-secondary text-white font-bold"
              >
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
