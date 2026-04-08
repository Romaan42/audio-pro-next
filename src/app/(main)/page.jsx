import Banner from '@/components/home/Banner'
import Categories from '@/components/home/Categories'
import NewsLetter from '@/components/home/NewsLetter'
import TrustBtns from '@/components/home/TrustBtns'
import React from 'react'

function page() {
  return (
    <div>
      <Banner />
      <TrustBtns />
      <Categories />
      <NewsLetter />
    </div>
  )
}

export default page