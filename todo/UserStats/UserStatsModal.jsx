import React , {useState} from 'react'
import UserCoins from './UserCoins'

export default function UserStatsModal() {
    const pStyle = 'm-auto font-bold text-2xl mt-4 mb-4'
    const [IsSignedIn, setIsSignedIn] = useState(true)

  return (
    <div>
        <label htmlFor="my-modal-6" className="btn glass modal-button">Wallet</label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box flex flex-col bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ">
               
                {IsSignedIn ? <UserCoins/> : <p className={pStyle}>SignUp!!</p>}

                <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn dark:glass m-auto">Close</label>
                </div>
            </div>
        </div>
    </div>
  )
}
