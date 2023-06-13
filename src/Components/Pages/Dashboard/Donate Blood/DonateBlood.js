import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const DonateBlood = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [users, setUsers] = useState([]);
  const userOne = users[0];
  // console.log(userOne);
  const [time, setTime] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [users, email]);
  const onSubmit = data => {
    const updateData = {
      ...data,
      time,
      bloodGroup: userOne?.bloodGroup,
      email: userOne?.email,
      freeBlood: userOne?.freeBlood,
      name: userOne?.name,
      role: userOne?.role,
      studentId: userOne?.studentId,
    };
    console.log(updateData);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 to-green-100 pb-40">
        <h2 className="pt-5  font-bold text-4xl text-center  uppercase mb-5">
          Donate Blood
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-center bg-green-800 p-5 rounded-2xl w-[500px]  ml-5 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <input
                value={`${userOne?.name}`}
                type="text"
                className="input input-bordered bg-white text-xl w-full mb-4 font-bold   hover:shadow-xl shadow-inner"
              />
              <input
                value={`${userOne?.bloodGroup}`}
                type="text"
                className="input input-bordered bg-white text-xl w-full mb-4 font-bold   hover:shadow-xl shadow-inner"
              />

              {/* age */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-xl">Age</span>
              </label>
              <input
                type="number"
                placeholder="Write Your Age"
                className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
                {...register('age', {
                  required: {
                    value: true,
                    message: 'Age is Required',
                  },
                })}
              />
              <label className="label">
                {errors.age?.type === 'required' && (
                  <span className="label-text-alt text-xl text-red-400">
                    {errors?.age?.message}
                  </span>
                )}
              </label>
              {/* age */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-xl">Weight</span>
              </label>
              <input
                type="number"
                placeholder="Write Your Weight"
                className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
                {...register('weight', {
                  required: {
                    value: true,
                    message: 'Weight is Required',
                  },
                })}
              />
              <label className="label">
                {errors.weight?.type === 'required' && (
                  <span className="label-text-alt text-xl text-red-400">
                    {errors?.weight?.message}
                  </span>
                )}
              </label>
              {/* Tile */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-xl">Time</span>
              </label>
              <select
                onClick={e => setTime(e.target.value)}
                className="select select-secondary w-full text-xl"
              >
                <option disabled selected>
                  Pick Up Your Time
                </option>
                <option>10:00-10-10:30AM</option>
                <option>11:00-10-11:30AM</option>
                <option>12:30-1.30PM</option>
                <option>1:30-2.00PM</option>
                <option>5:30-6.00PM</option>
              </select>
              {/* date */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-xl">Date</span>
              </label>
              <input
                type="date"
                placeholder="Images URL"
                className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
                {...register('date', {
                  required: {
                    value: true,
                    message: 'Date is Required',
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === 'required' && (
                  <span className="label-text-alt text-xl text-red-400">
                    {errors?.date?.message}
                  </span>
                )}
              </label>
              {/* Phone */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-xl">Phone</span>
              </label>
              <input
                type="phone"
                placeholder="Phone Number"
                className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone is Required',
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === 'required' && (
                  <span className="label-text-alt text-xl text-red-400">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>

              {/* address */}
              <label className="label">
                <span className="label-text text-white text-xl font-semibold">
                  Address
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Address"
                className="input input-bordered bg-white w-full   h-20 pt-1 hover:shadow-xl shadow-inner"
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is Required',
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === 'required' && (
                  <span className="label-text-alt text-xl text-red-400">
                    {errors?.address?.message}
                  </span>
                )}
              </label>

              {/* total price */}
              <label className="label">
                <span className="label-text text-white text-xl font-semibold ">
                  Total Price
                </span>
              </label>

              {/* submit */}

              <input
                className="btn  btn-primary mt-5 w-full text-white"
                type="submit"
                value="Buy Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
