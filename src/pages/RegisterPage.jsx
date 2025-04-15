import React, { useState } from "react";
import MobileContainer from "../components/MobileContainer";
import StickyNav from "../components/StickyNav";
import Image from "../components/Image";
import Logo from "../assets/logo.svg";
import { IoIosCall, IoIosFemale, IoIosMale } from "react-icons/io";
import { FaUser, FaWallet, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaHome, FaUserPlus, FaBook } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const RegisterPage = () => {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with genter : ", gender);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <MobileContainer>
          <Image imgSrc={Logo} imgAlt="logo.svg" className="px-16 py-3" />
          <div className="bg-white m-3 shadow-lg relative">
            <p className="text-center text-[#F7961D] text-2xl font-semibold leading-10">
              Registration
            </p>
            <form action="" onSubmit={handleSUbmit} className="mx-3 space-y-3">
                        {/* Name */}
                        <div>
                          <p className='text-[#464646] text-base leading-6'>Name <span className='text-red-500'>(required)</span></p>
                          <div className="flex my-1">
                            <label><FaUser className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                            <input type="text" name="name" placeholder='Name' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
                          </div>
                        </div>

                                  {/* Mobile */}
                                  <div>
                                    <p className='text-[#464646] text-base leading-6'>Mobile <span className='text-red-500'>(required)</span></p>
                                    <div className="flex my-1">
                                      <label><IoIosCall className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                                      <input type="tel" name="mobile" placeholder='Mobile' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
                                    </div>
                                  </div>

                                            {/* Email */}
                                            <div>
                                              <p className='text-[#464646] text-base leading-6'>Email <span className='text-red-500'>(required)</span></p>
                                              <div className="flex my-1">
                                                <label><IoIosCall className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                                                <input type="email" name="email" placeholder='Email' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
                                              </div>
                                            </div>
                                  {/* Gender */}
                                  <div className='my-2'>
                                    <p className='text-[#464646] text-base leading-6'>Gender <span className='text-red-500'>(required)</span></p>
                                    <div className="flex my-2 border border-gray-300 rounded overflow-hidden">
                                      {[
                                        { label: 'Male', icon: <IoIosMale className="mr-2 text-2xl" /> },
                                        { label: 'Female', icon: <IoIosFemale className="mr-2 text-2xl" /> },
                                      ].map((option) => (
                                        <button
                                          type="button"
                                          key={option.label}
                                          onClick={() => setGender(option.label)}
                                          className={`w-1/2 py-2 text-sm font-medium flex items-center justify-center transition ${
                                            gender === option.label
                                              ? 'bg-[#F7961D] text-white'
                                              : 'bg-white text-[#464646] hover:bg-orange-100'
                                          }`}
                                        >
                                          {option.icon}
                                          {option.label}
                                        </button>
                                      ))}
                                    </div>
                                    <input type="hidden" name="gender" value={gender} />
                                  </div>

                                            {/* Profession */}
                                            <div>
                                              <p className='text-[#464646] text-base leading-6'>Profession <span className='text-red-500'>(required)</span></p>
                                              <div className="flex my-1">
                                                <label><FaBriefcase className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                                                <input
                                                  list='professions'
                                                  name="profession"
                                                  placeholder='Select or type your profession'
                                                  className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full'
                                                  required
                                                />
                                                <datalist id="professions">
                                                  <option value="Student" />
                                                  <option value="Teacher" />
                                                  <option value="Engineer" />
                                                  <option value="Doctor" />
                                                  <option value="Nurse" />
                                                  <option value="Software Developer" />
                                                  <option value="Designer" />
                                                  <option value="Business Owner" />
                                                  <option value="Freelancer" />
                                                  <option value="Other" />
                                                </datalist>
                                              </div>
                                            </div>

                                                      {/* Wallet Balance */}
                                                      <div>
                                                        <p className='text-[#464646] text-base leading-6'>Wallet Balance <span className='text-red-500'>(required)</span></p>
                                                        <div className="flex my-1">
                                                          <label><FaWallet className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                                                          <input type="number" name="wallet" placeholder='Enter amount' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
                                                        </div>
                                                      </div>
                                                                {/* Address */}
                                                                <div>
                                                                  <p className='text-[#464646] text-base leading-6'>Address <span className='text-red-500'>(required)</span></p>
                                                                  <div className="flex my-1">
                                                                    <label><IoLocationSharp className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
                                                                    <input type="text" name="address" placeholder='Address' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
                                                                  </div>
                                                                </div>
                                                      
            </form>
          </div>
          <StickyNav />
        </MobileContainer>
      </div>
    </div>
  );
};

export default RegisterPage;
