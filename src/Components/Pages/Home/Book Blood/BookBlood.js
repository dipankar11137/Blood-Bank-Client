import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const BookBlood = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const email = user.email;
  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState('');
  const navigator = useNavigate();

  const userOne = users[0];

  const totalPrice = quantity * product?.price;

  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/blood/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/user/${email}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [users, email]);

  // console.log(email);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const changeUrl = {
      ...data,
      quantity,
      totalPrice,
      price: product.price,
      bloodGroup: product?.name,
      img: product?.img,
      email,
      user: userOne,
    };
    console.log(changeUrl);
    const url = `https://interective-dashboard-server.onrender.com/buyBlood`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(changeUrl),
    })
      .then(res => res.json())
      .then(result => {
        toast.success(' Successfully Buy this Blood');
        reset();
        navigator('/');
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 to-green-100 pb-20">
        <h2 className="pt-5  font-bold text-4xl text-center  uppercase mb-5">
          Buy Blood
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

              {/* Price */}

              <input
                value={`Price : ${product?.price} `}
                type="text"
                className="input input-bordered bg-white w-full  font-bold  text-xl   hover:shadow-xl shadow-inner"
              />

              {/* Quantity */}
              <label className="label">
                <span className="label-text text-white text-xl font-semibold">
                  Quantity
                </span>
              </label>
              <input
                onChange={e => setQuantity(e.target.value)}
                type="number"
                placeholder="Quantity"
                className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
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
              <input
                value={totalPrice}
                type="number"
                className="input input-bordered bg-white text-primary w-full text-center font-extrabold text-xl   hover:shadow-xl shadow-inner"
              />
              {/* submit */}
              {quantity ? (
                <input
                  className="btn  btn-primary mt-5 w-full text-white"
                  type="submit"
                  value="Buy Now"
                />
              ) : (
                <input
                  className="btn  btn-primary mt-5 w-full text-white"
                  disabled
                  type="submit"
                  value="Buy Now"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBlood;
