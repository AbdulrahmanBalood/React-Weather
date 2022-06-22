import React from 'react'

export const DataComponent = ({countryName,temperature,wind,description}) => {
  return (
    <div>
         <h1>{countryName}</h1>
    <div className="card" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Temperature: {temperature}</li>
          <li className="list-group-item">Wind: {wind}</li>
          <li className="list-group-item">Description: {description}</li>
        </ul>
      </div>
    </div>
  )
}
