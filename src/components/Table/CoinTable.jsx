import React, { useState ,useEffect} from 'react'
import getData from '../../data/fetchData'
import CoinTableRow from './CoinTableRow'
import ReactLoading from 'react-loading'
import Pagination from './Pagination'

export default function CoinTable({searchInput}) {
  const [Data, setData] = useState([])
  const [searchItems,setSearchItems] = useState([]) //to store searched items
  const [Loading , setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage] = useState(10)

  useEffect(()=>{
    setLoading(true);
    getData().then(coins=>{
      setData(coins.map(coin=>{
        return{
          ...coin,
          id: coin.id
        }; 
      }));setLoading(false);});
  },[])

  /**Pagination */
  const index0fLastItem=currentPage*coinsPerPage
  const index0fFirstItem=index0fLastItem-coinsPerPage
  const currentCoins=Data.slice(index0fFirstItem, index0fLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const pages = Math.ceil(Data.length/coinsPerPage)
  /**End of pagination */

  /*SEARCH FUNCTION */
  useEffect(()=>{
    setSearchItems(Data.filter(item=> item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1))
  },[searchInput]);

  let Coins;
  if(searchInput.length == 0){
    Coins = currentCoins;  //was Data
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
              {Loading ? <ReactLoading  className='ml-[700px]' type={'bars'} color={'black'} height={667} width={375} /> : renderRows}
          </tbody>
      </table>
      <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8">
            { Loading == false &&  
                <Pagination 
                    currentPage={currentPage} 
                    paginate={paginate}
                    pages = {pages}
                />
            }
      </div>
  </div>
  )
}
