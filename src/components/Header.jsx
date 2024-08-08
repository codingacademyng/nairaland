

import React from 'react'

function Header() {
  return (
    <div className='h-[60px] grid grid-cols-12'>
      <div className=' col-span-4 bg-sky-400'>
        <label>Logo</label>
      </div>

      <div className='col-span-8 bg-slate-700 flex justify-end text-orange-200 '>
        <ul className=' flex  gap-2 mr-4'>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Header