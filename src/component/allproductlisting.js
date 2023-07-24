import React, { memo  } from 'react';
import Mcard from './mobilecard.js'
import Brand from './brand.js'
import Access from './accessories.js'
import {useContext} from "react";
import { UserContext } from "../App";

const MemoizedMcard = memo(Mcard);//// This is to avoid re-rendering on parent's component state changes // currentl used for no purpose
function Product(){
  const { allItems} = useContext(UserContext);
    
    return (
    <> 
        <div className='mt-8  bg-white'>
          <p className='font-bold ml-4'>Trending:</p>
          <div className="justify-items-center grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {allItems.map((item)=>{
                return(
                  <MemoizedMcard item={item} key={item._id}/>
                )
              })}
        </div>
      </div>
      <div className='mt-8  bg-white '>
      <p className='font-bold ml-4'>Accessories:</p>
        <div className="mt-4 justify-items-center grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <div className=' rounded-xl'> <Access/> </div>
        </div>
      </div>

      <div className='mt-8 mx-8 bg-white '>
      <p className='font-bold '>Shop By Brand:</p>
        <div className="mt-2 justify-items-center grid grid-cols-3 gap-4">
            <div className='rounded-xl'><Brand/></div>
            <div className='rounded-xl'><Brand/></div>
            <div className='rounded-xl'><Brand/></div>
          </div>
      </div>

      <div className='mt-8  bg-white text-center  text-blue-900 font-bold'>
        <p className='ml-4 font-bold text-left'> Why to Buy From us:</p>
        <div className="mt-2 grid grid-cols-2 gap-1">
            <div className='flex items-center justify-center h-[20vh]  bg-slate-300'>CoD</div>
            <div className='flex items-center justify-center h-[20vh]  bg-slate-300'>100% Genuine</div>
            <div className='flex items-center justify-center h-[20vh]  bg-slate-300'>Earn Rewards</div>
            <div className='flex items-center justify-center h-[20vh]  bg-slate-300'>24 X 7 support</div>
          </div>
      </div>
    </>
    )
}
export default Product;