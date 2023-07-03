export default function SensitivityKey() {

  let lock = "/images/lock.png"
  let open_lock = "/images/open_lock.png"
  let book = "/images/book.png"
  let transparent = "/images/transparent.png"

  return (
    <div>

      <h3 className = "flex justify-end font-normal underline underline-offset-4 mr-10">Sensitivity Legend</h3>
      
      <div className = "flex items-center justify-end mt-4 mb-2 ml-6">
        <img src = {lock} alt = "Sensitive" width = "30" height = "30" className = "pl-3 mr-5"></img>
        <img src = {open_lock} alt = "Restricted" width = "30" height = "30" className = "pl-3 ml-5 mr-5"></img>
        <img src = {book} alt = "Public" width = "30" height = "30" className = "pl-3 ml-3 mr-7"></img>
      </div>
  
      <div className = "flex items-center justify-end mb-2 ml-6">
        <span className = "font-thin text-xs pr-4">Sensitive </span>
        <span className = "font-thin text-xs pr-4">Restricted</span>
        <span className = "font-thin text-xs mr-5">Public</span>
      </div>

      <br>
    </br>
    
    </div>

   
  )
}