import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserStart } from '../../../redux/actions/user.action'
import { usersCol } from './user.data'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./user.css";
import { Button } from '@mui/material'
import { Add, Dashboard } from '@mui/icons-material'

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state => state.user.users)
  

  const actionHandler = useCallback(() => {
    dispatch(getUserStart())
  }, [dispatch])

  useEffect(() => {
    actionHandler()
  }, [actionHandler, users.length, dispatch])


  // Column Definitions: Defines the columns to be displayed.
  const [colDefs,] = useState(usersCol);

  const rowSelection = 'multiple';
  const pagination = true;
  const paginationPageSize = 8;
  const paginationPageSizeSelector = [4, 8, 16];

  const rowClassRules = {
    // apply red to not working and white to not working
    'rag-remove-red' : "data.working === 'true'",
    'rag-red': "data.working === 'false'",
  };

  return (
    <>
      <div className='relative'>
        <h3 className='py-3 mb-4 w-full font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Users</h3>
        <div className='absolute top-2 flex gap-2 md:top-4 right-4'>
          <Button variant='contained' onClick={() => navigate('/admin/user/add')} endIcon={<Add />} className=''>Add User</Button>
          <Button variant='contained' onClick={() => navigate('/admin/dashboard')} endIcon={<Dashboard />} className=''>Dashboard</Button>
        </div>
      </div>
      <div
        className="ag-theme-quartz"
        style={{ height: '670px', fontSize: '16px' }}
      >
        <AgGridReact
          rowData={[...users]}
          columnDefs={colDefs}
          rowSelection={rowSelection}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          rowClassRules={rowClassRules}
          rowClass={'row'}
          rowHeight={80}
        />
      </div>
    </>
  )
}

export default User