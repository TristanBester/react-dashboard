import React from 'react'
import './home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { userData } from '../../dummyData'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        title='User Analytics'
        data={userData}
        dataKey='Active User'
        grid
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
