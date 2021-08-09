import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Tristan</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://sc01.alicdn.com/kf/Ud23c2845b3094bc2960db748f8e36368H/235297134/Ud23c2845b3094bc2960db748f8e36368H.jpg'
            className='topAvatar'
            alt='very nice'
          />
        </div>
      </div>
    </div>
  )
}
