import React from 'react';
import { useForm } from 'react-hook-form';

function AddDoctor() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className="mx-auto w-full max-w-[520px] rounded-xl  bg-white p-10 shadow">
            <h3 className="py-4 text-center text-xl font-bold text-accent">Add a new Doctor!</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">Name</label>
                    <input
                        {...register('name', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter email address"
                        role="input"
                        type="text"
                        className={`text-md mt-2 w-full rounded border
                                   border-gray-200
                                bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                    <input
                        {...register('email', {
                            required: { value: true, message: 'Email is required!' },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Please enter a valid email!',
                            },
                        })}
                        aria-label="enter email address"
                        role="input"
                        type="email"
                        className={`text-md mt-2 w-full rounded border border-gray-200
                                 bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Specialty
                    </label>
                    <input
                        {...register('specialty', {
                            required: { value: true, message: 'Specialization is required!' },
                        })}
                        aria-label="enter specialty"
                        role="input"
                        type="text"
                        className={`text-md mt-2 w-full rounded border
                                   border-gray-200
                                bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.specialty?.message}</p>
                </div>

                <button
                    type="submit"
                    aria-label="Login"
                    className="text-md btn mt-3 w-full py-4 font-bold leading-none text-white hover:bg-accent"
                >
                    add
                </button>
            </form>
        </div>
    );
}

export default AddDoctor;
