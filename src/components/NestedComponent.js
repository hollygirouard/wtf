import React from 'react'

const NestedComponent = ({ nestedData  }) => {
  console.log(nestedData)
  return (
    <div>
      <h1>Nested Data</h1>
      {
        nestedData.map((data) => (
          <>
          <p>ID: { data.id } </p>
          <p>Type: { data.type }</p>
          </>
        ))
      }
    </div>
  )
}

export default NestedComponent