/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [err, setErr] = useState(null);

    const handleResetPassword = () => {};
    const handleSignUp = () => {};

    return (
        <div className="w-full px-4 md:py-16">
            <form className="flex flex-col items-center justify-center">
                <div className="mt-16 w-full max-w-[480px] rounded-xl  bg-white p-10 shadow">
                    <p
                        aria-label="Sign up to a new account"
                        className="mb-12 text-center text-2xl font-bold leading-6 text-gray-800"
                    >
                        Sign Up
                    </p>

                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Name
                        </label>
                        <input
                            ref={nameRef}
                            aria-label="enter email address"
                            role="input"
                            type="text"
                            className={`text-md mt-2 w-full rounded border ${
                                err ? 'border-red-600' : 'border-gray-200'
                            } bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            aria-label="enter email address"
                            role="input"
                            type="email"
                            className={`text-md mt-2 w-full rounded border ${
                                err ? 'border-red-600' : 'border-gray-200'
                            } bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                        />
                    </div>
                    <div className="mt-6  w-full">
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input
                                ref={passwordRef}
                                aria-label="enter Password"
                                role="input"
                                type="password"
                                className={`text-md mt-2 w-full rounded border ${
                                    err ? 'border-red-600' : 'border-gray-200'
                                } bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                            />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                        fill="#71717A"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        {err ? <p className="mb-4 text-red-500">{err}</p> : ''}
                        <div className="mb-4 flex items-center">
                            <input
                                id="checkbox-1"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-accent"
                            />
                            <label
                                htmlFor="checkbox-1"
                                className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                I agree to the{' '}
                                <a
                                    href="/"
                                    className="text-accent hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                        <button
                            onClick={handleResetPassword}
                            className=" mb-4 cursor-pointer text-right text-sm font-semibold text-gray-800 hover:text-accent hover:underline"
                        >
                            Forgot password?
                        </button>
                        <button
                            type="submit"
                            onClick={handleSignUp}
                            role="button"
                            aria-label="Login"
                            className="text-md btn w-full   py-4 font-bold leading-none text-white hover:bg-accent"
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="mt-5 text-center text-sm font-medium leading-none text-gray-500">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            tabIndex={0}
                            role="link"
                            aria-label="Register here"
                            className="cursor-pointer text-sm font-medium leading-none text-secondary hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="px-2.5 text-base font-medium leading-4 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSignUp}
                        role="button"
                        aria-label="register"
                        className="text-md w-full  rounded-lg border border-accent py-4 font-bold uppercase leading-none text-accent"
                    >
                        continue with google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;