import React, { useState ,useEffect} from 'react'
import getData from '../data/fetchData'
import CoinTableRow from './CoinTableRow'

export default function CoinTable({searchInput}) {
  const [Data, setData] = useState([])
  const [searchItems,setSearchItems] = useState([]) //to store searched items


  useEffect(()=>{
    getData().then(coins=>{
      setData(coins.map(coin=>{
        return{
          ...coin,
          id: coin.id
        }
      }))});
  },[])

  /*SEARCH FUNCTION */
  useEffect(()=>{
    setSearchItems(Data.filter(item=> item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1))
  },[searchInput]);

  let Coins;
  if(searchInput.length == 0){
    Coins = Data;
  }else{
    Coins = searchItems;
  }
    const renderRows = Coins.map(coin=>(
        <CoinTableRow
        id={coin.id}
        key={coin.id}
        coinName={coin.name}
        coinPrice={coin.current_price}
        coinPriceLowest={coin.low_24h}
        coinPriceHighest={coin.high_24h}
        coinPriceChange={coin.price_change_24h}
        coinPriceChangePercantage={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        sparkLine={coin.sparkline_in_7d.price}
        />
    ))
    /*FINISH OF SEARCHING */

  return (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-3 ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="py-3 px-6">
                      Coin name
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Current Price
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Lowest - 24h
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Highest - 24h
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Price change
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Price change - percentage
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Volume
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Last 7 days
                  </th>
              </tr>
          </thead>
          <tbody>
              {renderRows}
          </tbody>
      </table>
  </div>
  )
}
