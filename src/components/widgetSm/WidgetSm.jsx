import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSm.css'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://i.pinimg.com/originals/37/85/f1/3785f1d8b4ef004d41e19c416cda3f2e.jpg'
            alt='Super nice'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Sleezy Joe</span>
            <span className='widgetSmUserTitle'>Front end guy</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://i.pinimg.com/originals/37/85/f1/3785f1d8b4ef004d41e19c416cda3f2e.jpg'
            alt='Super nice'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Sleezy Joe</span>
            <span className='widgetSmUserTitle'>Front end guy</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://i.pinimg.com/originals/37/85/f1/3785f1d8b4ef004d41e19c416cda3f2e.jpg'
            alt='Super nice'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Sleezy Joe</span>
            <span className='widgetSmUserTitle'>Front end guy</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://i.pinimg.com/originals/37/85/f1/3785f1d8b4ef004d41e19c416cda3f2e.jpg'
            alt='Super nice'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Sleezy Joe</span>
            <span className='widgetSmUserTitle'>Front end guy</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://i.pinimg.com/originals/37/85/f1/3785f1d8b4ef004d41e19c416cda3f2e.jpg'
            alt='Super nice'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Sleezy Joe</span>
            <span className='widgetSmUserTitle'>Front end guy</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
