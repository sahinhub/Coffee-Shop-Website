import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {

               const userCreationTime=result?.user?.metadata?.creationTime;
               const userLastSignIn=result?.user?.metadata?.lastSignInTime;

               const user={
                name,
                password,
                email,
                userCreationTime,
                userLastSignIn
               }

               if(user){
                fetch('http://localhost:5000/newUser',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user),
               }
               )
               .then(res=>res.json())
               .then(data=>{
                console.log(data);
                if(data.insertedId){
                    console.log('user successfully added to the database');
                }
               })
               }
            
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
                    
                            <label className="label text-white text-lg">Name</label>
                            <input type="text" name='name' className="input placeholder:text-gray-500 text-black bg-white w-full" placeholder="Your Name" />

                            <label className="label text-white text-lg">Email</label>
                            <input type="email" name='email' className="input placeholder:text-gray-500 text-black bg-white w-full" placeholder="Email" />

                            <label className="label text-white text-lg">Password</label>
                            <input type="password" name='password' className="input bg-white/50 text-black w-full placeholder:text-gray-500" placeholder="Password" />
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