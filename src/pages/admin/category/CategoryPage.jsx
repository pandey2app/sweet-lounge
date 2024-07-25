import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Add, Category, Dashboard, Delete, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryStart, getCategoryStart } from '../../../redux/actions/category.action';
import { useNavigate } from 'react-router-dom';


const CategoryPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state => state.category.categories)

    const deleteCategory = (id)=>{
        dispatch(deleteCategoryStart(id))
        navigate('/admin/category')
    }

    useEffect(() => {
        dispatch(getCategoryStart())
    }, [categories.length, dispatch])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className='relative'>
                    <h3 className='py-3 mb-4 w-full font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Categories</h3>
                    <div className='absolute flex gap-2 top-4 right-4'>
                        <Button variant='contained' onClick={() => navigate('/admin/category/add')} endIcon={<Add />} className='me-2'>Add Catagory</Button>
                        <Button variant='contained' onClick={() => navigate('/admin/dashboard')} endIcon={<Dashboard />} className=''>Dashboard</Button>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    {
                        categories.length > 0 && categories.map((category, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                                <div
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                    className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                    {
                                        category.image.length === 0 && <Category style={{ fontSize: 80 }} />
                                    }
                                </div>
                                <div>
                                    <h2 className="title-font md:text-3xl  font-bold bg-orange-300 text-gray-900 capitalize mt-6 mb-3">{category.name}</h2>
                                    <h4 className="title-font md:text-2xl  font-medium bg-orange-300 text-red-600 border-b-2 border-orange-600 capitalize ">{category.type}</h4>
                                    <p className="text-xl  font-mono bg-orange-300 text-gray-900 capitalize mb-3 overflow-hidden h-7">{category.description.length > 0 ? category.description : 'Edit to Add description'}</p>
                                </div>
                                <div className='flex justify-between px-2'>
                                    <Button variant='contained' color='secondary' onClick={()=>navigate(`/admin/category/edit/${category.id}`)} endIcon={<Edit />} className='w-1/3'>Edit</Button>
                                    <Button variant='contained' color='error' endIcon={<Delete />} onClick={()=>deleteCategory(category.id)} className='w-1/3'>Delete</Button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default CategoryPage;
