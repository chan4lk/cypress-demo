import React from 'react'

type Props = {
  data: {
    name: string
  }[]
}

function EmployeeList({data}: Props) {
  return (
    <div>{data.map(emp => (<div key={emp.name}>{emp.name}</div>))}</div>
  )
}

export default EmployeeList