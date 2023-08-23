import React from 'react'
import './single.css'
import { SinglePost } from '../../singlepost/singlepost'
import { SideBar } from '../../sidebar/sidebar'
export const Single = () => {
  return (
    <div className='single'>

    <SinglePost/>
      <SideBar/>
    </div>
  )
}
