import { useState, useEffect } from 'react'
import React from 'react'
 
export default function Header() {
    const [data, setData] = useState(null)
 
    useEffect(() => {
      fetch('/api/header')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }, [])

    if (!data) return;

    return (
        <header className="bg-duke-navy-blue">
        <div id="header-block" className="flex">
          <img id = "logo" src = {data.photo} alt = "duke logo" height = {75} width = {250} className="-ml-10 -mr-10 -mb-4 -mt-4"/>
          <h1 className="text-dandelion px-3.5 font-thin mt-6 -ml-10">Data Foundry</h1>
          <div id="login-details" dir="ltr" className="mt-10 text-white ml-auto mr-10">
            Logged in as {data.name}
            <a href="https://groups.oit.duke.edu/Shibboleth.sso/Logout?return=https://shib.oit.duke.edu/cgi-bin/logout.pl" className="text-dandelion text-right ml-3"> Log out</a>
          </div>
        </div>
      </header>
    )
    }