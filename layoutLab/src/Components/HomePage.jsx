import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function HomePage() {
  return (
    <div className='border-solid border-yellow-500 border-4  w-6/12'>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage
