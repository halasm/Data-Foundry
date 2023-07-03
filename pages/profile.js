import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import SearchBar from '@/components/search-bar'
import Header from '@/components/header'
 
export default function Profile({ setSearchString }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div>
      <Header />
      <nav className="bg-hatteras px-2.5 py-2.5 font-sans text-sm font-bold">
          <Link href="/" className="text-duke-royal-blue hover:text-duke-royal-blue px-3.5">DATABASE</Link>
          <Link href="/mydata" className="text-duke-navy-blue hover:text-duke-royal-blue px-3.5">MY DATASETS</Link>
          <Link href="/documentation" className="text-duke-navy-blue hover:text-duke-royal-blue px-3.5">DOCUMENTATION</Link>
      </nav>
      <main>
        <section id="database" className = "flex">
          <h1 className = "mb-4 mt-4 font-normal pl-6">Data Catalog</h1>
          <div className = "search-bar-container mr-10 mb-5 ml-auto"> 
            <SearchBar setSearchString={setSearchString} />
          </div>
        </section>
      </main> 
    </div>
  )
}