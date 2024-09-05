import React from 'react'

function EmployeeListItem() {
    const employee = [{name: 'James King', title: 'President and CEO'},
                      {name: 'Julie Taylor', title: 'VP of Marketing'},
                      {name: 'Eugene Lee', title: 'CFO'},
                      {name: 'John Williams', title: 'VP of Engineering'},
                      {name: 'Ray Moore', title: 'VP of Sales'},
                      {name: 'Paul Jones', title: 'QA Manager'}  
                                 
                    ]
  return (
    <div>
     {employee.map(({name, title}, index) => (
        <div key={index} >
          <h2 className='font-black'>{name}</h2>
          <h4 className='font-extralight'>{title}</h4>
        </div>

     ))}
    </div>
  )
}

export default EmployeeListItem
