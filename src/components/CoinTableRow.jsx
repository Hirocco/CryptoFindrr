import React from 'react'
import millify from 'millify'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function CoinTableRow({coinName,coinPrice,coinPriceLowest,coinPriceHighest,coinPriceChange,coinPriceChangePercantage,volume,sparkLine}) {
  const textStyle='flex font-bold text-xl'
  return (
    <tr className="bg-gray-200 border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p className={textStyle}>{coinName}</p>
        </th>
        <td className="py-4 px-6">
          <p className={textStyle}> {millify(coinPrice)}$</p>
        </td>
        <td className="py-4 px-6">
          <p className={textStyle}> {millify(coinPriceLowest)}$</p>
        </td>
        <td className="py-4 px-6">
          <p className={textStyle}> {millify(coinPriceHighest)}$</p>
        </td>
        <td className="py-4 px-6">
          <p className={textStyle}> {millify(coinPriceChange)}$</p>
        </td>
        <td className='py-4 px-6'>
          <p className={textStyle}> {millify(coinPriceChangePercantage)}%</p>
        </td>
        <td className='py-4 px-6'>
          <p className={textStyle}> {millify(volume)}$</p>
        </td>
        <td className='flex items-center justify-center'>
          <div className='h-[48px] w-[162px] mr-auto'>
            <Sparklines data={sparkLine} limit={168} width={162} height={50} margin={3}>
              <SparklinesLine color="#14B8A6" />
            </Sparklines>
          </div>
        </td>
      </tr>
  )
}
