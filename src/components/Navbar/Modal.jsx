import React , {useState , useEffect} from 'react'

export default function Modal({Info}) {
    //Searching
    const [searchInput,setSearchInput] = useState('')
    const [searchItems,setSearchItems] = useState([])

    const handleSearch = (value)=>{
        setSearchInput(value)
    }

    useEffect(()=>{
        setSearchItems(Info.filter(item=> item.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1))
    },[searchInput]);

    let informations;
    if(searchInput.length == 0){
        informations = Info;  //was Data
      }else{
        informations = searchItems;
      }

    const renderInfo = informations.map(news=>(
        <div className='flex flex-col dark:shadow shadow-xl border-1 p-3  dark:bg-gray-200 rounded-box mt-4'>
            <h3 className="text-lg font-bold text-black m-auto">{news.title}</h3>
            <a target='_blank' href={news.url} className="link link-hover text-black m-auto mt-3">{news.url}</a>
        </div>
    ))
    //Finish of searching   

  return (
    <div>
        <label htmlFor="my-modal-4" className="btn glass modal-button">CryptoNews</label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative dark:bg-gray-700 rounded-box overflow-auto " for="">
          <input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search info" className="input input-ghost m-auto mt-2 w-full max-w-[800px] border-black dark:border-white border dark:placeholder-white  dark:focus:placeholder-black" />
            {renderInfo}
          </label>
        </label>

    </div>
  )
}
