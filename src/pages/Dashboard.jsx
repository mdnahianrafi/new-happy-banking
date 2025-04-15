import React from 'react'
import Image from '../components/Image'
import MobileContainer from '../components/MobileContainer'
import DashboardStickyNav from '../components/DashboardStickyNav'
import Logo from '../assets/logo.svg'
import { IoHomeSharp, IoCall } from 'react-icons/io5';
import { FaMobileAlt } from "react-icons/fa";
import { AiTwotoneBank } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import Button from '../components/Button'
import { FaMoneyBill } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
const Dashboard = () => {
  return (
    <>
 <div className="container mx-auto">
 <div className="flex justify-center ">
<MobileContainer className="">
<DashboardStickyNav className="md:top-[89%] lg:top-[78%] xl:top-[68%]  2xl:top-[52%] h-14 md:w-[356px] screen-3xl-custom"/>
<div className="flex justify-around py-3 bg-[#F7961D]">
<div className="">  <IoHomeSharp className='text-white text-2xl'/></div>
<div className=""><img src="/src/assets/logo.png" alt="" className='w-[200px]' /></div>
<div className="flex gap-x-3">
<FaEnvelopeOpenText className='text-xl text-white'/>
<FaBell className='text-xl text-white'/>
</div>
</div>

<div className="contianer mx-3 py-3 mt-[20px] mb-2 shadow-lg rounded-5 bg-white ">
<div className="flex ">
  <div className="w-1/2 border-r-2 border-gray-300">
  <p className='text-center text-2xl font-medium text-[#6C757D] leading-7'>Wallet</p>
  <div className="flex gap-x-2 my-1">
<MdPhotoSizeSelectActual className=' text-[#6C757D] mt-[6px] ml-2 mb-'/>
<p className='text-center text-base font-medium text-[#6C757D] leading-7'>Current Balance</p>
  </div>
  <p className='text-center text-[#198754] text-2xl font-medium'>19000</p>
 <div className="flex justify-center">
 <Button className="px-6">Transaction</Button>
 </div>
  </div>
  <div className="w-1/2">
  <p className='text-center text-2xl font-medium text-[#6C757D] leading-7'>Transfer to</p>
<div className="flex flex-col justify-center">
  <div className='flex justify-center items-center'>
    <Button className='px-6'>
      MFS
    </Button>
  </div>
  <div className='flex justify-center items-center'>
    <Button className="px-3">
      Account
    </Button>
  </div>
  <div className='flex justify-center items-center'>
    <Button className="px-6">
      Card
    </Button>
  </div>

</div>
  </div>
</div>
</div>

{/* My Account  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>My Accounts</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">
  <div className="w-1/3 ">
  {/* MFS  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMobileAlt className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>MFS</p>
  </div>
  </div>
  <div className="w-1/3 ">
  {/* Bank  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<AiTwotoneBank className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Bank</p>
  </div>
  </div>
  <div className="w-1/3 ">
  {/* Card  */}
  <div className=" flex flex-col justify-center items-center py-4">
<FaRegCreditCard className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Card</p>
  </div>
  </div>
</div>
</div>

{/* Income  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>Income</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">
  <div className="w-1/3 ">
  {/* Wallet  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMoneyBill className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Wallet</p>
  </div>
  </div>

  <div className="w-1/3 ">
  {/* MFS  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMobileAlt className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>MFS</p>
  </div>
  </div>

  <div className="w-1/3 ">
  {/* Bank  */}
  <div className=" flex flex-col justify-center items-center py-4">
<AiTwotoneBank className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Bank</p>
  </div>
  </div>

</div>
</div>

{/* Expense  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>Expense</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">
  <div className="w-1/4 ">
  {/* Wallet  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMoneyBill className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Wallet</p>
  </div>
  </div>

  <div className="w-1/4 ">
  {/* MFS  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMobileAlt className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>MFS</p>
  </div>
  </div>

  <div className="w-1/4 ">
  {/* Bank  */}
  <div className=" flex flex-col border-r-2 border-gray-300 justify-center items-center py-4">
<AiTwotoneBank className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Bank</p>
  </div>
  </div>
  <div className="w-1/4 ">
  {/* Card  */}
  <div className=" flex flex-col justify-center items-center py-4">
<FaRegCreditCard className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Credit Card</p>
  </div>
  </div>
</div>
</div>
{/* Benificiary  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>Benificiary</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">


  <div className="w-1/2 ">
  {/* MFS  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMobileAlt className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>MFS Benificiary</p>
  </div>
  </div>

  <div className="w-1/2 ">
  {/* Bank  */}
  <div className=" flex flex-col border-r-2 border-gray-300 justify-center items-center py-4">
<AiTwotoneBank className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Bank Benificiary</p>
  </div>
  </div>

</div>
</div>

{/* Calculator  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>Calculater</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">
  <div className="w-1/4 ">
  {/* DBR  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaMoneyCheckAlt className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>DBR</p>
  </div>
  </div>

  <div className="w-1/4 ">
  {/* Loan EMi  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaCashRegister className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Loan EMI</p>
  </div>
  </div>

  <div className="w-1/4 ">
  {/* Card Emi  */}
  <div className=" flex flex-col border-r-2 border-gray-300 justify-center items-center py-4">
<FaCalculator className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Card EMI</p>
  </div>
  </div>
  <div className="w-1/4 ">
  {/* Trade  */}
  <div className=" flex flex-col justify-center items-center py-4">
<FaPercentage className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Trade</p>
  </div>
  </div>
</div>
</div>


{/* Others  */}
<h1 className='pl-3 text-2xl text-[#6C757D] font-medium leading-7'>Others</h1>
<div className="contianer mx-3 py-3 my-[10px] shadow-lg rounded-5 bg-white ">
 
<div className="flex">


  <div className="w-1/2 ">
  {/* MFS  */}
  <div className="border-r-[2px] border-gray-300 flex flex-col justify-center items-center py-4">
<FaAddressCard  className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>About</p>
  </div>
  </div>

  <div className="w-1/2 ">
  {/* Documentation  */}
  <div className=" flex flex-col border-r-2 border-gray-300 justify-center items-center py-4">
<FaBookOpenReader  className='text-2xl text-[#F7961D] leading-6'/>
<p className='pt-1 text-sm text-[#212529] leading-4'>Documentation</p>
  </div>
  </div>

</div>
</div>
</MobileContainer>
      </div>
 
 </div>
      
    </>
 
  )
}

export default Dashboard