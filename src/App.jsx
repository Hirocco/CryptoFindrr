import React, {useState} from 'react'
import {Navbar,Hero,CoinTable,Footer,InfoPart} from './components/export'

export default function App() {
  const [DarkTheme , setDarkTheme] = useState(false)
  const [searchInput,setSearchInput] = useState('')

  const handleSearch = (value)=>{
    setSearchInput(value)
  }

  return (
    <div className={DarkTheme ? 'dark' : ''}>
      <div className='bg-white scroll-smooth p-0 py-4 text-black font-bold dark:bg-gray-700 dark:text-white w-full min-h-full '>
        <nav><Navbar setDarkTheme={()=>setDarkTheme(!DarkTheme)} /></nav>
        <div className='flex flex-col p-2 px-5 mt-9 bg-gray-100 dark:bg-gray-700'>
          <Hero/>
          <InfoPart/>
          <input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search for your cryptocurrency here" className="input input-ghost m-auto mt-2 w-full max-w-[800px] border-black dark:border-white border dark:placeholder-white  dark:focus:placeholder-black" />
          <CoinTable searchInput={searchInput}/>
        </div>
        <footer><Footer/></footer>
      </div>
    </div>
  )
}
