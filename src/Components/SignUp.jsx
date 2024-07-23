import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data);

  return (
        <div className="max-w-2xl w-full mx-auto shadow-lg flex flex-col items-center justify-center my-48 ">
             <div className="modal-action mt-0 flex flex-col justify-center">
                <form className="card-body" method='dialog' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-bold text-2xl text-center">Create a New Account</h2>
                    {/* Error Section */}
                    <div>

                    </div>
                    {/* Login details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email")} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />
                    </div>

                    {/* Login button */}
                    <div className="form-control mt-6">
                        <input type='submit' className="btn bg-primary-color text-white hover:text-black" value="Submit"/>
                    </div>

                    <p className='text-center m-2'>Have an account? 
                        <button className='underline text-red-600 ml-1' onClick={()=>document.getElementById('my_modal_5').showModal()}> Login</button> 
                    </p>
               
                </form>
                {/* Social icon */}
                <div className='text-center space-x-3 mb-5'>
                    <button className="btn btn-circle hover:bg-primary-color hover:text-white text-black">
                        <FaGoogle/>
                    </button>
                    <button className="btn btn-circle hover:bg-primary-color hover:text-white text-black">
                        <FaFacebookF/>
                    </button>
                    <button className="btn btn-circle hover:bg-primary-color hover:text-white text-black">
                        <FaGithub/>
                    </button>
                </div>  
            </div>
            <Modal/>
            <Link to="/"
                htmlFor="my_modal_5"
                onClick={()=>document.getElementById('my_modal_5').close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

        </div>
  )
}

export default SignUp
