import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Section from './Section';

const Forgot = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/users/forgot', formData);
            setMessage(res.data.msg);
            if (res.data.success) {
                navigate('/signin');
            }
        } catch (err) {
            if (err.response) {
                setErrors(err.response.data.errors || {});
                setMessage(err.response.data.msg || 'Server error');
            } else {
                setMessage('Network error');
            }
        }
    };

    return (
        <>
            <Section crosses>
                <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between">
                    <div className="max-w-[32.875rem] mx-auto mb-12 text-center md:mb-16 lg:flex lg:flex-col lg:justify-around lg:max-w-[23.75rem] lg:m-0 lg:text-left">
                        <h2 className="h2">Forgot your password?</h2>
                        <p className="hidden body-2 mt-4 text-n-4 md:block">Reset it by entering your email and phone number, and setting a new password.</p>
                    </div>
                    <form
                        className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12"
                        onSubmit={onSubmit}
                    >
                        <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className={`w-full h-14 pl-12 bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-n-1/15'} font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30`}
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className={`w-full h-14 pl-12 bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-n-1/15'} font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30`}
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className={`w-full h-14 pl-12 bg-transparent border-b ${errors.newPassword ? 'border-red-500' : 'border-n-1/15'} font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30`}
                                    placeholder="New Password"
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className={`w-full h-14 pl-12 bg-transparent border-b ${errors.confirmPassword ? 'border-red-500' : 'border-n-1/15'} font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30`}
                                    placeholder="Re-enter Password"
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                            </div>
                            <button
                                className="button relative inline-flex items-center justify-center h-11 px-7 text-n-8 transition-colors hover:text-color-1 w-full"
                                type="submit"
                            >
                                <span className="relative z-10">Reset Password</span>
                                <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
                                    <path fill="white" stroke="white" strokeWidth="2"
                                        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1">
                                    </path>
                                </svg>
                                <svg className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]" height="44"
                                    viewBox="0 0 100 44" preserveAspectRatio="none" fill="white">
                                    <polygon fill="white" fillRule="nonzero" points="100 0 100 44 0 44 0 0"></polygon>
                                </svg>
                                <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
                                    <path fill="white" stroke="white" strokeWidth="2"
                                        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1">
                                    </path>
                                </svg>
                            </button>
                            {message && <p className="text-center text-sm text-red-500 mt-4">{message}</p>}
                        </div>
                        <div className="hidden absolute top-6 -right-12 bottom-6 xl:flex">
                            <div className="w-6 bg-[#1B1B2E] rounded-r-3xl"></div>
                            <div className="w-6 my-12 bg-[#1B1B2E]/50 rounded-r-3xl"></div>
                        </div>
                    </form>
                </div>

                <div className="absolute inset-0">
                    <img alt="Background" loading="lazy" width="1920" height="1080" decoding="async" data-nimg="1"
                        className="inline-block align-top transition-opacity opacity-100 w-full h-full object-cover" src="https://ui8-brainwave-landing.herokuapp.com/_next/image?url=%2Fimages%2Flogin%2Fbackground.jpg&w=3840&q=100"
                        style={{ color: 'transparent' }} />
                </div>
            </Section>
        </>
    );
}

export default Forgot;
