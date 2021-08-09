import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'

export default function UserList() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt={'nice'} />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      description: 'This is a tooltip for the column.',
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'You can do things...',
      width: 230,
      renderCell: (params) => {
        return (
          <>
            <Link to={'user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        checkboxSelection
      />
    </div>
  )
}
