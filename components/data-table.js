import { useState, useEffect } from 'react'

export default function DataTable({ filters, searchString }) {

    let lock = "/images/lock.png"
    let open_lock = "/images/open_lock.png"
    let book = "/images/book.png"
    let transparent = "/images/transparent.png"

    const [databases, setDatabases] = useState([])

    useEffect(() => {
        fetch("/api/data-table/" + searchString, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters.filters)
        })
            .then((res) => res.json())
            .then((data) => {
                setDatabases(data)
            })
    }, [])

    function checkLock(arrayString){
      if (arrayString == "" | arrayString == " " | arrayString == "{}" | arrayString == null) {
        return "\n"
      }
      let toArray = arrayString.split(",")
      if (toArray.includes("Sensitive")){
        return lock;
      }
      else {
        return transparent;
      }
    }

    function checkUnlock(arrayString){
      if (arrayString == "" | arrayString == " " | arrayString == "{}" | arrayString == null) {
        return "\n"
      }
      let toArray = arrayString.split(",")
      if (toArray.includes("Restricted")){
        return open_lock;
      }
      else {
        return transparent;
      }
    }

    function checkPublic(arrayString){
      if (arrayString == "" | arrayString == " " | arrayString == "{}" | arrayString == null) {
        return "\n"
      }
      let toArray = arrayString.split(",")
      if (toArray.includes("Public")){
        return book;
      }
      else {
        return transparent;
      }
    }

    if (!databases.length) return (
      <div className = "text-center font-thin text-xl ml-2">
        Sorry, no data set matches your search criteria. Please try again.
      </div> 
    );

    return (
      <div className="relative overflow-x-auto sm:rounded-lg mr-10">

        <table className = "border-hidden border-spacing-px w-full my-5">
     
          <tbody>   
            {databases.map(({data_source, office, poc, sensitivity, freeq, description, icon, uid}) => 
              <tr className = "hover:bg-gray-200 rounded-l-lg">                
                
                <td className = "rounded-l-lg">
                  <img src = {icon} alt = "snoopy" height = "110" width = "110" className = "columns-10 ml-10 rounded-lg"></img>
                </td>
                
                <td className = "rounded-r-lg text-left pl-10 pt-3 pb-3">
                  <a href = {`/data-sources/${uid}`}>
                    <div className = "pl-4 text-left">
                      <span className = "uppercase text-2xl">{data_source}</span>
                      <span className = "font-thin text-s ml-2 text-gray-600">{office.split(",").join(", ")}</span> 
                    </div>

                    <div>
                      <span className = "pl-4">Person of Contact: </span>
                      <span className = "font-thin">{poc.split(",").join(", ")}</span>
                    </div>

                    <div className = "pl-4 ">
                      <span className = "font-thin text-s">{description}</span>
                    </div>
          
                    <div className = "flex items-left mt-4 mb-2">
                      <img src = {checkLock(sensitivity)} alt = "Sensitive" width = "30" height = "30" className = "pl-3 mr-5"></img>
                      <img src = {checkUnlock(sensitivity)} alt = "Restricted" width = "30" height = "30" className = "pl-3 ml-5 mr-5"></img>
                      <img src = {checkPublic(sensitivity)} alt = "Public" width = "30" height = "30" className = "pl-3 ml-3 mr-7"></img>
                    </div> 
                  </a>
              
                </td>
              </tr>)} 

            </tbody>

        </table>  
      </div> 
    );
} 