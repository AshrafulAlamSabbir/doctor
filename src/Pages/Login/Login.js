import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"

                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password"

                            className="input input-bordered w-full max-w-xs" />


                        <label className="label"><span className="label-text">forget password?</span> </label>

                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />

                </form>
                <p>New To Doctors portal? <Link className='text-secondary' to="/">create an account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>


    );
};

export default Login;