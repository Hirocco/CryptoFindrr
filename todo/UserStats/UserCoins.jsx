import React, {useState} from 'react'
import CoinDisplay from './CoinDisplay'
import millify from 'millify'

export default function UserCoins() {
  const pStyle = 'm-auto font-bold text-2xl mt-4 mb-4'
  const [Coins, setCoins] = useState([0])
  
  return (
    <>
    <h1 className='m-auto font-bold text-2xl'>Wallet Statistics:</h1>
    <p className={pStyle}>Ballance : {millify(10000)}$</p>
    {Coins.length == 0 ? 
      '' :
      <div className="overflow-x-auto rounded-box text-gray-800">
          <table className="table table-compact w-full">
              <thead>
              <tr>
                  <th>Name</th> 
                  <th>Amout</th> 
                  <th>How much?</th>
                  <th>Sell</th> 
              </tr>
              </thead> 
              <tbody>
                  <CoinDisplay/>
              </tbody>
          </table>
      </div>
    }
    </>
  )
}
