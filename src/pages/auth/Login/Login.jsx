import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        /* Sign in */
        signIn(email, password)
        .then(result =>{
            const user = result.user;
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div className="min-h-screen pt-14 pb-36">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-1/2 ml-20">
                    <img src={img} alt="" />
                </div>
                <div className="rounded-lg w-1/2 shrink-0 px-20 border-2 border-[#D0D0D0] max-w-xl mr-20">
                    <form onSubmit={handleLogIn}>
                        <h1 className="text-4xl font-semibold text-[#444] text-center pt-12 pb-10">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold text-[#444] pb-5">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold text-[#444] pt-7 pb-5">Confirm Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Your password" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control pt-7">
                            <button className="btn bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Sign In</button>
                        </div>
                        <h3 className='text-center text-[#444] text-lg font-medium py-6'>Or Sign In with</h3>
                        <div className='flex gap-4 justify-center'>
                            <div onClick={handleGoogleSignIn} className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FcGoogle className='text-2xl'></FcGoogle>
                            </div>
                            <div className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FaFacebookF className='text-2xl text-[#3B5998]'></FaFacebookF>
                            </div>
                            <div className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FaLinkedinIn className='text-2xl text-[#0A66C2]'></FaLinkedinIn>
                            </div>
                        </div>
                        <h4 className='text-[#737373] text-lg font-normal text-center pt-8 pb-10'>Don't have an account? <Link to="/signout"><span className='text-[#FF3811] font-bold'>Sign Up</span></Link></h4>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;