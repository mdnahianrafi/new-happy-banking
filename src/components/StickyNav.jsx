import React from 'react';
import { IoHomeSharp, IoCall } from 'react-icons/io5';
import { LuLogIn } from 'react-icons/lu';
import { FaUserPlus, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StickyNav = ({className}) => {
  return (
    <div className={`fixed bottom-0 w-full  bg-white text-white p-4 z-50 ${className}`}>
      <nav>
        <ul className="flex justify-around text-black">
          <li>
            <Link to="/">
              <IoHomeSharp className="text-base mx-auto font-extrabold" />
              <p className="text-sm leading-5">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LuLogIn className="text-base mx-auto font-extrabold" />
              <p className="text-sm leading-5">Login</p>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUserPlus className="text-base mx-auto font-extrabold" />
              <p className="text-sm leading-5">Register</p>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <FaBook className="text-base mx-auto font-extrabold" />
              <p className="text-sm leading-5">Blog</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IoCall className="text-base mx-auto font-extrabold" />
              <p className="text-sm leading-5">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StickyNav;
