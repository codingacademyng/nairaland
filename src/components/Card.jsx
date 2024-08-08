
import React from 'react'

function Card(props) {
  return (
    <div className='min-h-[250px] hover:bg-orange-400 bg-white rounded-md p-[10px] shadow-md'>
      { props.mytext}
    </div>
  )
}

export default Card