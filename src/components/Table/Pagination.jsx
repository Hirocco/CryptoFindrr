import { useEffect, useState } from 'react'

export default function Pagination({ currentPage,paginate,pages }){
    
    const pageNumbers=[];
    for (let i = 1; i <= pages; i++){
          pageNumbers.push(i);
    }

    const [arrOfCurrButtons,setArrOfCurrButtons] = useState([])
    
    useEffect( () => {
        let tempNumberOfPages = [...pageNumbers]
       
        setArrOfCurrButtons(tempNumberOfPages)
    },[currentPage] )

    return(
        <div className={`tabs tabs-boxed  dark:bg-gray-900 bg-white shadow-md select-none`}>
            { arrOfCurrButtons.map( (page,index) => {
                return (
                    <button 
                        className={`tab font-semibold rounded-md ml-1 mr-1 ${currentPage === page ? 'bg-teal-500 shadow-2xl text-accent-content' : 'btn-ghost' }`} 
                        style={ { transition: "all 0.2s ease" }}
                        onClick={ () => paginate(page) }
                        key={index}
                    >{page}</button> 
                )
            } )}
            {console.log("Paginate Rendered")}
        </div>
    )
}


 /*było w useEffect
        if (currentPage >= 1 && currentPage <= 3) {
            tempNumberOfPages = [1,2,3,4,5,'...',pageNumbers.length]
        }
        else if ( currentPage === 4 ) {
            const sliced = pageNumbers.slice(0,5)
            tempNumberOfPages = [...sliced,'...', pageNumbers.length]
        }
        else if ( currentPage > 4 && currentPage < pageNumbers.length - 2 ) {
            const sliced1 = pageNumbers.slice(currentPage - 2, currentPage)         // from 5 to 8 -> (10 - 2)
            const sliced2 = pageNumbers.slice(currentPage, currentPage + 2)         // sliced (5-2,5) -> [4,5]
            tempNumberOfPages = ([1,'...',...sliced1,...sliced2,'...',pageNumbers.length])           // [1,'...',4,5,6,'...',10]
        }
        else if ( currentPage > pageNumbers.length - 3) {                           // > 7
            const sliced = pageNumbers.slice(pageNumbers.length - 4)                // slice (10-4)
            tempNumberOfPages = ([1,'...',...sliced])
        }
*/