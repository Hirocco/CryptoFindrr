import React from 'react'
import millify from 'millify';

export default function HeroCoinData({coinName,coinImage,coinPrice}) {
    //console.log(coinImage)
  return (
    <div className={`w-[100px] max-h-25 carousel-item flex-col ml-6 p-3 border rounded-xl`}>
        <img src={coinImage} alt='currency' className='rounded-xl mb-0 '/>
        <h1 className='font-bold text-xl text-gray-800 m-auto dark:text-white'>{coinName}</h1>
        <p className='font-bold text-xl text-gray-800 m-auto dark:text-white'>{millify(coinPrice)} $</p>
    </div>
  )
}
