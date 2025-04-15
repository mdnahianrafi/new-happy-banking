import React from 'react'
import { IoHomeSharp, IoCall } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaMobileAlt } from "react-icons/fa";
import { AiTwotoneBank } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const DashboardStickyNav = ({className}) => {
  return (
    <div className={`fixed bottom-0 w-full  bg-white text-white p-4 z-50 ${className}`}>
    <nav>
      <ul className="flex justify-around text-black">
        <li>
          <Link to="/dashboard">
            <IoHomeSharp className="text-base mx-auto font-extrabold" />
            <p className="text-sm leading-5">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaMobileAlt className="text-base mx-auto font-extrabold" />
            <p className="text-sm leading-5">MFS</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <AiTwotoneBank className="text-base mx-auto font-extrabold" />
            <p className="text-sm leading-5">Bank</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaRegCreditCard className="text-base mx-auto font-extrabold" />
            <p className="text-sm leading-5">Card</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaUser className="text-base mx-auto font-extrabold" />
            <p className="text-sm leading-5">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default DashboardStickyNav