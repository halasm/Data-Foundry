import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';

export default function Documentation(){
    return (
      <div>
        <Header />
        <nav class="bg-hatteras px-2.5 py-2.5 font-sans text-sm font-bold">
          <Link href="/" class="text-duke-navy-blue hover:text-duke-royal-blue px-3.5">DATABASE</Link>
          <Link href="/mydata" class="text-duke-navy-blue hover:text-duke-royal-blue px-3.5">MY DATASETS</Link>
          <Link href="/documentation" class="text-duke-royal-blue hover:text-duke-royal-blue px-3.5">DOCUMENTATION</Link>
        </nav>
        <div>
            <h1 className = "mb-4 mt-4 font-normal pl-6">Documentation</h1>
            <h2 className = "ml-6 font-sans text-xl">About Data Foundry</h2>
        </div>
      </div>
    )
}