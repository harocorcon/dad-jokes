
'use client';

import { useState } from "react";
import { login, signup } from "./actions";

export default function Login(){
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [clickedSignUp, setClickSignUp] = useState(false);

    return (
        <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="mt-3 w-full text-2xl text-center">Dadjokez</h1>
                <form className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" id="email" name="email" autoComplete="email" required placeholder="Email Address" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="password" id="password" name="password" autoComplete="current-password" required placeholder="password" />
                    </div>
                    { clickedSignUp && 
                        <div>Sign up link sent! Go confirm your email.</div>
                    }
                    <div>
                        {
                            isSigningUp ? (
                                <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    type="submit" 
                                    formAction={signup}
                                    onClick={() => setClickSignUp(true)}
                                >
                                    Sign up
                                </button>
                            ) : (
                                <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="submit" formAction={login}>
                                    Login
                                </button>
                            )
                        }
                    </div>
                </form>
            <div className="flex justify-center p-3">
                    {
                        !isSigningUp ? (
                            <p className="items-center justify-center text-sm font-light text-gray-500 dark:text-gray-400"> Don't have an account? {' '}
                                <button className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                                    onClick={() => setIsSigningUp(true)}
                                >
                                    Sign up
                                </button>
                            </p>
                        ) : (
                            <p  className="items-center justify-center text-sm font-light text-gray-500 dark:text-gray-400"> Already have an account? {' '}
                                <button className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                                type="submit" formAction={login} onClick={() => setIsSigningUp(false)}>
                                    Login
                                </button>
                            </p>
                        )
                    }
                </div>
            </div>
        </main>
    )
}