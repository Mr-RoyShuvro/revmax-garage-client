import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        /* Create User */
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                /* Navigate user */
                navigate(location?.pathname ? location?.pathname : "/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="min-h-screen pt-14 pb-36">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-0">
                <div className="w-3/4 md:w-1/2 ml-0 md:ml-20">
                    <img src={img} alt="" />
                </div>
                <div className="rounded-lg w-5/6 md:w-1/2 shrink-0 px-4 md:px-20 border-2 border-[#D0D0D0] max-w-xl mr-0 md:mr-20">
                    <form onSubmit={handleSignUp}>
                        <h1 className="text-4xl font-semibold text-[#444] text-center pt-12 pb-10">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold text-[#444] pb-5">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold text-[#444] pb-5 pt-7">Email</span>
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
                            <button className="btn bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Sign Up</button>
                        </div>
                        <h3 className='text-center text-[#444] text-lg font-medium py-6'>Or Sign In with</h3>
                        <div className='flex gap-4 justify-center'>
                            <div onClick={handleGoogleSignIn} className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FcGoogle className='text-2xl'></FcGoogle>
                            </div>
                            <div onClick={handleGoogleSignIn} className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FaFacebookF className='text-2xl text-[#3B5998]'></FaFacebookF>
                            </div>
                            <div onClick={handleGoogleSignIn} className='rounded-full bg-[#F5F5F8] p-5 hover:bg-[#ebebf8] hover:cursor-pointer'>
                                <FaLinkedinIn className='text-2xl text-[#0A66C2]'></FaLinkedinIn>
                            </div>
                        </div>
                        <h4 className='text-[#737373] text-lg font-normal text-center pt-8 pb-10'>Already have an account? <Link to="/login"><span className='text-[#FF3811] font-bold'>Sign In</span></Link></h4>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;