import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProductStart, } from '../redux/actions/product.action'
import { deleteUserStart } from '../redux/actions/user.action'

const TableButton = ({ id, name, color, caller }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let editHandler = ()=>{}
  let deleteHandler = ()=>{}
  if (caller === 'product') {
    editHandler = (id) => {
      navigate(`/admin/product/edit/${id}`)
    }
    deleteHandler = (id) => {
      dispatch(deleteProductStart(id))
      setTimeout(() => {
        navigate('/admin/product')
      }, 1000)
    }
  }else if(caller === 'user'){
    editHandler = (id) => {
      navigate(`/admin/user/edit/${id}`)
    }
    deleteHandler = (id) => {
      dispatch(deleteUserStart(id))
      setTimeout(() => {
        navigate('/admin/user')
      }, 1000)
    }
  }

  return (
    <Button
      variant='contained'
      size='small'
      color={color}
      onClick={name === 'edit' ? () => editHandler(id) : () => deleteHandler(id)}
      className=''
    >
      {name}
    </Button>
  )
}

export default TableButton