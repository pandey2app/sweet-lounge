import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormData } from '../../../hooks/useFormData'
import { initialState, validationSchema } from './user.data'
import { updateUserStart } from '../../../redux/actions/user.action'
import { Button, FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material'
import { AddCircle, ArrowBack, CloudUploadOutlined } from '@mui/icons-material'

const EditUser = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [errors, setErrors] = useState({})
  const users = useSelector((state) => state.user.users)


  const [formData, uploadStatus, setFormData, inputChange, uploadFiles] = useFormData(initialState, 'user')

  const searchUserById = useCallback((id) => {
    if (!id) {
      navigate('/admin/user')
    }
    let user = users.find((u) => u.id === id)
    setFormData({
      ...user
    })
  }, [navigate, setFormData, users])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      dispatch(updateUserStart(formData, id));

      setTimeout(() => {
        navigate('/admin/user')
      }, 1000)
    } catch (error) {
      const newErrors = {}
      error.inner.forEach(err => {
        newErrors[err.path] = err.message
      });

      setErrors(newErrors)
    }
  };
  useEffect(() => {
    searchUserById(id)
  }, [id, searchUserById])

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className='relative'>
          <h3 className='py-3 mb-4 w-full font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Edit User</h3>
          <div className='absolute top-2 md:top-4 right-4'>
            <Button variant='contained' onClick={() => navigate('/admin/user')} endIcon={<ArrowBack />} className=''>Back</Button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4 mx-auto">
            <form onSubmit={handleSubmit} className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
              <div>
                <TextField label='Name' value={formData.name} name='name' variant="outlined" onChange={inputChange} fullWidth />
                {errors.name && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.name}</p>}
              </div>

              <FormControl>
                <InputLabel id="helper-label">Field</InputLabel>
                <Select
                  labelId="helper-label"
                  id="field-type"
                  name="field"
                  value={formData.field}
                  onChange={inputChange}
                  label="Field"
                  placeholder="Field"
                  fullWidth
                  variant="outlined"
                  className="form-field"
                >
                  <MenuItem value='kichen'>Kichen</MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                  <MenuItem value='sells'>Sells</MenuItem>
                  <MenuItem value='delivery'>Delivery</MenuItem>
                </Select>
                {errors.field && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.field}</p>}
              </FormControl>
              <FormControl>
                <InputLabel id="helper-label">Role</InputLabel>
                <Select
                  labelId="helper-label"
                  id="role-type"
                  name="role"
                  value={formData.role}
                  onChange={inputChange}
                  label="role"
                  placeholder="role"
                  fullWidth
                  variant="outlined"
                  className="form-field"
                >
                  <MenuItem value='cakes'>Cakes</MenuItem>
                  <MenuItem value='pizzas'>Pizzas</MenuItem>
                  <MenuItem value='chocolates'>Chocolates</MenuItem>
                  <MenuItem value='decorators'>Decorators</MenuItem>
                </Select>
                {errors.role && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.role}</p>}
              </FormControl>

              <div>
                <TextField label="Joining Date" variant="outlined" type='date' value={formData.joined} name='joined' onChange={inputChange} fullWidth InputLabelProps={{
                  shrink: true,
                }} />
                {errors.joined && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.joined}</p>}
              </div>

              <FormControl >
                <InputLabel id="helper-label">Active</InputLabel>
                <Select
                  labelId="helper-label"
                  id="working-type"
                  name="working"
                  value={formData.working}
                  onChange={inputChange}
                  label="Field"
                  placeholder="Field"
                  fullWidth
                  variant="outlined"
                  className="form-working"
                >
                  <MenuItem value='true'>Yes</MenuItem>
                  <MenuItem value='false'>No</MenuItem>
                </Select>
                {errors.working && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.working}</p>}
              </FormControl>

              <div>
                <TextField label='salary' type="number" value={formData.salary} name='salary' variant="outlined" onChange={inputChange} fullWidth />
                {errors.salary && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.salary}</p>}
              </div>

              <div>
                <TextField label='Mobile no.' type="mobile" value={formData.mobile} name='mobile' variant="outlined" onChange={inputChange} fullWidth />
                {errors.mobile && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.mobile}</p>}
              </div>

              <div>
                <TextField label='address' value={formData.address} name='address' variant="outlined" onChange={inputChange} multiline rows={2} fullWidth />
                {errors.address && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.address}</p>}
              </div>
              {formData.image ?
                <div
                  style={{
                    backgroundImage: `url(${formData.image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                  className='justify-center flex h-96 '>
                </div> : <p className=' md:text-xl text-red-600 text-sm font-semibold text-left'>{errors.image}</p>
              }
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadOutlined />}
              >
                Upload file
                <VisuallyHiddenInput type="file" name='image' onChange={uploadFiles} />
              </Button>
              <Button type="submit" variant='contained' disabled={uploadStatus} endIcon={<AddCircle />}>Update User</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditUser