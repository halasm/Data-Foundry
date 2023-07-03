import React, { useEffect, useState } from 'react';
import Profile from '@/pages/profile';
import DataTable from '@/components/data-table';
import Filters from '@/components/filters';
import Footer from '@/components/footer';
import SensitivityKey from '@/components/sensitivity-key';

export default function Home() {
  const [filters, setFilters] = useState({
    "filters": {
      "office": ["All"],
      "sensitivity": "All", 
      "request_process": "All",
      "request_form": "All",
      "frequency": "All"
    }})

  const [searchString, setSearchString] = useState("")
  
  const [state, setState] = useState(Date.now())

  useEffect(() => {
    setState(Date.now());
  }, [filters, searchString])

  return (
    <div>
      <Profile setSearchString={setSearchString} />

      <div className="flex justify-start">
        <div className = "pb-10">
          <SensitivityKey/>

          <Filters setFilters={setFilters}/>

        </div>
        <span key={state}>
          <DataTable filters={filters} searchString={searchString} />
        </span>
      </div>


      <Footer />
    </div>
  )
}