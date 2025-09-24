import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password, 'user wants to sign up');
        createUser(email, password)
            .then((result) => {
                // Signed up 
                console.log(result);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                // ..
            });
    }
    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center text-black max-w-2xl">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-brand w-full max-w-2xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                    
                            <label className="label text-white text-lg">Email</label>
                            <input type="email" name='email' className="input placeholder:text-gray-800 text-black bg-white w-full" placeholder="Email" />

                            <label className="label text-white text-lg">Password</label>
                            <input type="password" name='password' className="input bg-white/50 text-black w-full placeholder:text-gray-800" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;