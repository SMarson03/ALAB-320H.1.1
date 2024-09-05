import './App.css'
import React from 'react'
import HomePage from './Components/HomePage'
import EmployeePage from './Components/EmployeePage'

function App() {
  return (
    <div className='flex flex-row border-black' >
      <HomePage />
      <EmployeePage />
    </div>
  )
}

export default App