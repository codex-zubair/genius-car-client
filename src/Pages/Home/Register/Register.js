import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider';


const Register = () => {

    const { createAnAccountWithEmail,setCurrentUserNameProfile } = useContext(AuthContext)


    const onSubmitForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;



        // Creating an account with email
        createAnAccountWithEmail(email, password)
        .then(res=> {
            alert("Successful");
            setCurrentUserNameProfile(name);
        })
        .catch(error=> console.log(error))
    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-2">

                <div className="">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                    <form onSubmit={onSubmitForm}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-red-500">Register</button>
                        </div>
                    </form>
                    <p className='mt-2'>Have an Account?? <Link to='/login' className='text-orange-600'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;