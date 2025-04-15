import React from 'react';
import { IoHomeSharp ,IoCall} from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';
const StickyNav = () => {
  return (
    <div className="fixed bottom-0 w-full  md:absolute md:bottom-0 md:w-full bg-white text-white p-4">
      <nav >
<ul className="flex justify-around text-black">
<li>
<Link to='/'>
<IoHomeSharp className='text-base mx-auto font-extrabold'/>

<p className='text-sm leadin-5'>Home</p>
</Link>
</li>
<li>
<Link to='/'>
<LuLogIn className='text-base mx-auto font-extrabold'/>

<p className='text-sm leadin-5'>Login</p>
</Link>
</li>
<li>
<Link to='/'>
<FaUserPlus className='text-base mx-auto font-extrabold'/>

<p className='text-sm leadin-5'>Register</p>
</Link>
</li>
<li>
<Link to='/'>
<FaBook className='text-base mx-auto font-extrabold'/>

<p className='text-sm leadin-5'>Blog</p>
</Link>
</li>
<li>
<Link to='/'>
<IoCall className='text-base mx-auto font-extrabold'/>

<p className='text-sm leadin-5'>Contact</p>
</Link>
</li>
</ul>
      </nav>
    </div>
  );
};

export default StickyNav;
