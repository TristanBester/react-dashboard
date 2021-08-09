import React from 'react'
import './productList.css'
import { productRows } from '../../dummyData'
import { DataGrid } from '@material-ui/data-grid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@material-ui/icons'

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt={'nice'} />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <Link to={'/product/' + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='productListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        }
    ]

    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}
