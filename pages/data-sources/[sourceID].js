import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export default function Page() {

  const [dataSource, setDataSource] = useState([])
  const router = useRouter()
  const { sourceID } = router.query
  
  useEffect(() => {
      console.log(sourceID);
      if (!sourceID) return;

      fetch(`/api/data-sources/${sourceID}`)
          .then((res) => res.json())
          .then((data) => {
              setDataSource(data)
          })
  }, [sourceID])

  return (
    <div>
    
      <header className="bg-duke-navy-blue">
        <div id="header-block" className="flex">
          <img id = "logo" src = "/images/duke_wordmark_white.png"alt = "duke logo" 
               height = {75} width = {250} className="-ml-10 -mr-10 -mb-4 -mt-4"/>
          <h1 className="text-white px-3.5 font-thin mt-6 -ml-10">Data Foundry</h1>
          <div id="login-details" dir="ltr" className="mt-10 text-white ml-auto mr-10">
            Logged in as Ina
            <a href="https://groups.oit.duke.edu/Shibboleth.sso/Logout?return=https:// \
                     shib.oit.duke.edu/cgi-bin/logout.pl" className="text-dandelion text-right ml-3">Log out</a>
          </div>
        </div>
      </header>

      <div className = "p-10 flex flex-nowrap">
        <div>
          <div className = "rounded-lg mr-5 p-5 min-h-100 w-64 absolute sm:relative bg-gray-200 \
                            shadow md:h-full flex-col justify-between hidden sm:flex">
            <button className = " btn bg-duke-royal-blue hover:bg-blue-400 text-white \
                                  font-thin py-2 px-4 border-b-4 border-blue-700 \
                                  hover:border-blue-500 rounded-full"> Request Access </button>
          </div>      
        </div>
        
        <div className = "w-full">   
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>        
          {dataSource.map(({data_source, office, poc, sensitivity, freeq,
                            description, icon, uid}) => 
              <div>
                <div className = "flex bg-gray-200 rounded-lg p-5">
                  <img src={icon} height = "100" width = "100" alt ="data-set icon" className = "rounded-lg mr-5"></img>
                  <h1 className = " mt-2 font-normal text-4xl text-duke-navy-blue font-sans">{data_source}</h1> 
                </div>
                
                <div className = "py-5 pl-5 shadow-lg mt-5">
                    <text className = "font-normal text-3xl font-sans text-duke-royal-blue">Source Information</text>
                    <br></br>
                    <text className = "font-sans font-normal text-lg">Data Owner(s): </text>
                    <text className = "font-thin font-sans text-lg">{office}</text>
                    <br></br>
                    <text className="font-sans font-normal text-lg" >Person(s) of Contact: </text>
                    <text className = "font-thin font-sans text-lg">{poc}</text>
                    <br></br>
                    <text className = "font-sans font-normal text-lg">Access Frequency: </text>
                    <text className = "font-thin font-sans text-lg">{freeq.split(",").join(", ")}</text>
                </div>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownId" 
                        className="shadow-lg mt-5 w-full text-duke-royal-blue bg-white hover:bg-gray-100 
                        text-3xl px-4 py-2.5 text-center inline-flex items-center" type="button">Summary 
                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" 
                        viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <br></br>
                <br></br>
                <text className = "font-thin ml-5">{description}</text>
                <div id="dropdownId" className="z-10 hidden bg-white divide-y divide-gray-100 \
                        rounded-lg shadow w-44 dark:bg-gray-700"></div>

              </div>  
          )}

        </div>
      </div>
        
    </div>
  )
}

