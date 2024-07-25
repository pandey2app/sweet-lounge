import React, {  useCallback, useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./product.css";
import { Button } from '@mui/material';
import { Add, Dashboard } from '@mui/icons-material';
import { bakeryProductsCol } from './product.data'
import { useDispatch, useSelector } from 'react-redux';
import { getProductStart } from '../../../redux/actions/product.action';
import { useNavigate } from 'react-router-dom';


const Product = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.product.products)

  const actionHandler = useCallback(()=>{
    dispatch(getProductStart())
  },[dispatch])

  useEffect(()=>{
    actionHandler()
  },[actionHandler, products.length ,dispatch])


  // Column Definitions: Defines the columns to be displayed.
  const [colDefs,] = useState(bakeryProductsCol);

  const rowSelection = 'multiple';
  const pagination = true;
  const paginationPageSize = 8;
  const paginationPageSizeSelector = [4, 8, 16];

  const rowClassRules = {
    // apply red to not available
    'rag-red': params => params.data.available !== true,
  };

  return (
    <>
      <div className='relative'>
        <h3 className='py-3 mb-4 w-full font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Products</h3>
        <div className='absolute top-2 flex gap-2 md:top-4 right-4'>
          <Button variant='contained' onClick={() => navigate('/admin/product/add')} endIcon={<Add />} className=''>Add Product</Button>
          <Button variant='contained' onClick={() => navigate('/admin/dashboard')} endIcon={<Dashboard />} className=''>Dashboard</Button>
        </div>
      </div>
      <div
        className="ag-theme-quartz"
        style={{ height: '670px', fontSize: '16px' }}
      >
        <AgGridReact
          rowData={products}
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

export default Product