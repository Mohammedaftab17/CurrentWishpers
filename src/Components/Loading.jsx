import React from 'react'
import Spinner from './Spinner.gif'


function Loading() {
  return (
    <div className='text-center'>
      <img src={Spinner} alt="" />
    </div>
  )
}

export default Loading
