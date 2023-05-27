import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CreateAccount = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  let signInError;

  const createDBUser = (name, email) => {
    fetch(`http://localhost:5000/create-user/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Create a Profile');
      });
  };

  const onSubmit = data => {
    // console.log(data.email, data.password, data.name);
    createUserWithEmailAndPassword(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    createDBUser(data.name, data.email);
    navigate('/');
  };
  return (
    <div
      style={{
        background: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-geometric-gradient-creative-blood-donation-poster-background-material-image_134137.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen"
      // className="flex justify-center h-screen bg-slate-700"
    >
      <div className="flex justify-center   ">
        <div className="card w-96 shadow-2xl bg-violet-700 mt-20">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-32 h-24"
                src="https://png.pngtree.com/png-clipart/20221228/original/pngtree-donation-blood-vector-love-in-white-background-png-image_8818465.png"
                alt=""
              />
            </div>
            {/* <h2 className="text-center text-2xl font-bold">SignUp</h2> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                value="Sign Up"
              />
            </form>

            <div className="divider  text-white">OR</div>
            <p className="text-white">
              <small>Already Have an Account ? </small>
            </p>
            <Link to="/login" className="btn btn-secondary font-bold">
              Please Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
