import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'> Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,132</span>
          <span className='featuredMoneyRate'>
            -11.45 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'> Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,322</span>
          <span className='featuredMoneyRate'>
            +3.498 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'> Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>2$</span>
          <span className='featuredMoneyRate'>
            -2.33 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
    </div>
  )
}
