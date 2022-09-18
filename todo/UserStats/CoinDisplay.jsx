import React from 'react'

export default function CoinDisplay() {

  return (
    <tr>
        <td>Bitcoin</td> 
        <td>1.023</td>
        <td><input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" /></td>
        <td><button className='btn btn-sm'>Sell</button></td> 
    </tr>
  )
}
