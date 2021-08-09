import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/564x/ec/9a/99/ec9a996472b2f7cdee8a9096f2bc348c.jpg'
              alt='even nicer than the last one'
              className='widgetLgImg'
            />
            <span className='widgetLgUserName'>Susan Smith</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$123.22</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/564x/ec/9a/99/ec9a996472b2f7cdee8a9096f2bc348c.jpg'
              alt='even nicer than the last one'
              className='widgetLgImg'
            />
            <span className='widgetLgUserName'>Susan Smith</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$123.22</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/564x/ec/9a/99/ec9a996472b2f7cdee8a9096f2bc348c.jpg'
              alt='even nicer than the last one'
              className='widgetLgImg'
            />
            <span className='widgetLgUserName'>Susan Smith</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$123.22</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/564x/ec/9a/99/ec9a996472b2f7cdee8a9096f2bc348c.jpg'
              alt='even nicer than the last one'
              className='widgetLgImg'
            />
            <span className='widgetLgUserName'>Susan Smith</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$123.22</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  )
}
