import React , {useEffect,useState} from 'react'
import getData from '../data/fetchData'
import HeroCoinData from './HeroCoinData'


export default function Hero() {
  const [CoinData, setCoinData] = useState([])
  
  useEffect(()=>{
    getData().then(coins=>{
      setCoinData(coins.map(coin=>{
        return{
          ...coin,
          id: coin.id
        }
      }))});
  },[])

  const renderCoins = CoinData.map(coin=> (
    <HeroCoinData
    key={coin.id}
    id={coin.id}
    coinName={coin.name}
    coinImage={coin.image}
    coinPrice={coin.current_price}
    />
  ))
  //console.log(renderCoins)

  return (
    <div className="carousel rounded-box min-w-full min-h-full mt-5 border dark:bg-gray-800 ">
      {renderCoins}
    </div>
  )
}