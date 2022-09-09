import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default function Modal({coinName , sparkLine}) {

  return (
    <div>
      <label htmlFor="my-modal" className="btn btn-outline dark:btn-ghost modal-button">View Details</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  min-w-screen flex flex-col">
          <h3 className="font-bold text-3xl text-black m-auto">{coinName}</h3>
          <div>
            <Sparklines data={sparkLine} limit={168} width={162} height={50} margin={3}>
              <SparklinesLine color="#14B8A6" />
            </Sparklines>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-outline m-auto">Close</label>
          </div>
        </div>
      </div>
    </div>
  )
}
