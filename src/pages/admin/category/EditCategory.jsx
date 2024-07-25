import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormData } from '../../../hooks/useFormData'
import { updateCategoryStart } from '../../../redux/actions/category.action'
import { Button, FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material'
import { AddCircle, ArrowBack, CloudUploadOutlined } from '@mui/icons-material'
import { validationSchema } from './categoryValidation'

const initialState = {
  name: '',
  image: '',
  type: '',
  description: ''
}

const EditCategory = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categories = useSelector((state) => state.category.categories)
  const [errors, setErrors] = useState({})
  const { id } = useParams()
  const [formData, uploadStatus, setFormData, inputChange, uploadFiles] = useFormData(initialState, 'category')

  const searchCategoryById = useCallback((id) => {
    if (!id) {
      navigate('/admin/category')
    }
    let category = categories.find((c) => c.id === id)
    setFormData({
      ...category
    })
  },[categories, navigate, setFormData])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false })
      dispatch(updateCategoryStart(formData, id));

      setTimeout(() => {
        navigate('/admin/category')
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
    searchCategoryById(id)
  }, [id, searchCategoryById])

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
          <h3 className='py-3 mb-4 w-full font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Edit Category</h3>
          <div className='absolute top-4 right-4'>
            <Button variant='contained' onClick={() => navigate('/admin/category')} endIcon={<ArrowBack />} className=''>Back</Button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4 mx-auto">
            <form onSubmit={handleSubmit} className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
              <div>
                <TextField label="Category Name" value={formData.name} name='name' variant="outlined" onChange={inputChange} fullWidth />
                {errors.name && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.name}</p>}
              </div>
              <FormControl>
                <InputLabel id="helper-label">Category type</InputLabel>
                <Select
                  labelId="helper-label"
                  id="category-type"
                  name="type"
                  value={formData.type}
                  onChange={inputChange}
                  label="Category Type"
                  placeholder="Category Type"
                  fullWidth
                  variant="outlined"
                  className="form-field"
                >
                  <MenuItem value='cakes'>Cakes</MenuItem>
                  <MenuItem value='pizzas'>Pizzas</MenuItem>
                  <MenuItem value='chocolates'>Chocolates</MenuItem>
                  <MenuItem value='decorators'>Decorators</MenuItem>
                </Select>
                {errors.type && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.type}</p>}
              </FormControl>
              <div>
                <TextField label="Description" variant="outlined" multiline value={formData.description} name='description' onChange={inputChange} rows={2} fullWidth />
                {errors.description && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.description}</p>}
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
                </div> : <p className='md:text-xl text-red-600 text-sm font-semibold text-left'>{errors.image}</p>}
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
              <Button type="submit" variant='contained' disabled={uploadStatus} endIcon={<AddCircle />}>Update Category</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditCategory