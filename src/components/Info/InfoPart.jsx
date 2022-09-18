import React from 'react'

export default function InfoPart() {
  return (
    <div className="hero lg:min-h-[300px] sm:min-h-[200px] bg-gray-200 border rounded-box shadow mt-4 mb-4 dark:bg-gray-700">
      <div className="hero-content  flex-col lg:flex-row-reverse dark:bg-gray-900 rounded-box">
        <div className='shadow p-4 rounded-lg flex flex-col'>
          <h1 className="text-4xl font-bold m-auto ">Keep up-to-date & train your trading skills with us!</h1>
          <p className="text-xl py-6">Keep everything under controll with our data and train your financial skills on real-time data using our demo trading mode!<br/></p>
          <p className='text-xl m-auto'>Get 10k$ in demo money to trade on our site by signing up!</p>
          <p className='m-auto'>(To scroll on carousel use left/right keyboard arrow)</p>
        </div>
      </div>
    </div>
    )
  }
