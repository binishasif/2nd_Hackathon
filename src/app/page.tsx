import React from 'react'
import Banner from '@/components/Banner'
import NewArrival from './NewArrival/page'
import TOPSELLING from './Topselling/page'
import BROWSEBYDRESSSTYLE from './Browse/page'
import OURHAPPYCUSTOMER from './happy/page'
const Home = () => {
  return (
    <div>
      <Banner/>
      <NewArrival/>
      <TOPSELLING/>
      <BROWSEBYDRESSSTYLE/>
      <OURHAPPYCUSTOMER/>
    </div>
  )
}

export default Home