import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const FreeBook = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const email = user.email;
  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState({});
  const navigator = useNavigate();

  const userOne = users[0];

  useEffect(() => {
    fetch(`http://localhost:5000/blood/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [users, email]);

  const updateId = users[0]?._id;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFree = () => {
    const updateFreeBlood = { freeBlood: true };
    fetch(`http://localhost:5000/userId/${updateId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateFreeBlood),
    })
      .then(res => res.json())
      .then(data => {
        toast.success(' Successfully Book this Blood');
        reset();
        navigator('/');
      });
  };
  const onSubmit = data => {
    const changeUrl = {
      ...data,
      status: 'Free',
      quantity: 1,
      price: product.price,
      bloodGroup: product?.name,
      img: product?.img,
      email,
      user: userOne,
    };
    console.log(changeUrl);
    const url = `http://localhost:5000/buyBlood`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(changeUrl),
    })
      .then(res => res.json())
      .then(result => {
        handleFree();
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 to-green-100 pb-40">
        <h2 className="pt-5  font-bold text-4xl text-center  uppercase mb-5">
          Free Blood
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-center bg-green-800 p-5 rounded-2xl w-[500px]  ml-5 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <input
                value={`${product?.name}`}
                type="text"
                className="input input-bordered bg-white text-xl w-full mb-4 font-bold   hover:shadow-xl shadow-inner"
              />

              {/* Image */}
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

export default FreeBook;
