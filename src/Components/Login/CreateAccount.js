import React, { useState } from 'react';
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
  const [bloodGroup, setBloodGroup] = useState('');
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
  const [student, setStudent] = useState('');

  let from = location.state?.from?.pathname || '/';

  let signInError;

  const createDBUser = data => {
    const updateUser = {
      name: data.name,
      email: data.email,
      studentId: data.studentId,
      bloodGroup,
    };
    // console.log(updateUser);
    fetch(
      `https://interective-dashboard-server.onrender.com/create-user/${data?.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateUser),
      }
    )
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Create a Profile');
        navigate('/');
      });
  };

  const onSubmit = data => {
    createUserWithEmailAndPassword(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    createDBUser(data);
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
        <div className="card w-[500px] shadow-2xl bg-violet-700 mt-5">
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
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full  "
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
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full  "
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
              {/* Student Id */}
              {student === 'Student' ? (
                <div className="form-control mb-3">
                  <label
                    onClick={() => setStudent('')}
                    className="flex items-center gap-3  cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500 bg-white"
                    />
                    <span className="text-white ">Not a Student</span>
                  </label>
                </div>
              ) : (
                <div className="form-control mb-3">
                  <label
                    onClick={() => setStudent('Student')}
                    className=" flex items-center gap-3 cursor-pointer "
                  >
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-500 bg-white"
                    />
                    <span className=" text-white">If You are a student</span>
                  </label>
                </div>
              )}

              {student === 'Student' && (
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-white">Student Id</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Student Id"
                    className="input input-bordered bg-white w-full  "
                    {...register('studentId', {
                      required: {
                        value: true,
                        message: 'Student Id is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.studentId?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.studentId.message}
                      </span>
                    )}
                  </label>
                </div>
              )}

              <div>
                {/* Blood Group */}
                <select
                  onChange={e => setBloodGroup(e.target.value)}
                  className="select select-info w-full  text-xl"
                >
                  <option disabled selected>
                    Select Blood Group
                  </option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              {/* Password */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full  "
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
              {bloodGroup ? (
                <input
                  className="btn btn-primary w-full text-white"
                  type="submit"
                  value="Sign Up"
                />
              ) : (
                <input
                  className="btn btn-primary w-full text-white"
                  disabled
                  type="submit"
                  value="Sign Up"
                />
              )}
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
