import React from 'react'

export const ButtonsComponent = ({buttonName,onClick}) => {
  return (
    <>
     <button onClick={onClick} type="button" className="btn btn-secondary mt-1">
        {buttonName}
      </button>
    </>
  )
}
