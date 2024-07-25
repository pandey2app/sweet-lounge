import React from 'react'
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { Home, ContactMail, Category, ProductionQuantityLimits, People, ShoppingBag } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const OverView = () => {
    const navigate = useNavigate()

    const clickHandler = (route)=>{
        navigate(route);
    }
    return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="home" onClick={()=>clickHandler('/admin/dashboard')}>
                        <Home />
                    </IconButton>
                    <Typography variant="h6" className="flex-grow">
                        Overview
                    </Typography>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/category')}>Categories</Button>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/product')}>Products</Button>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/user')}>Users</Button>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/product')}>Other</Button>
                </Toolbar>
            </AppBar>
            <h3 className='py-2 text-right pe-4 font-mono font-bold text-lime-600 md:text-xl'>Welcome! <span>{'aditya prakash pandey'}</span></h3>
            <div className="container px-5 pb-4 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Overview</h3>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <Category style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Categories</h2>
                        <Button variant='contained' fullWidth onClick={()=>clickHandler('/admin/category')}>Go</Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <ProductionQuantityLimits style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Products</h2>
                        <Button variant='contained' fullWidth onClick={()=>clickHandler('/admin/product')}>Go</Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <People style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Users</h2>
                        <Button variant='contained' fullWidth onClick={()=>clickHandler('/admin/user')}>Go</Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <ShoppingBag style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Outlets</h2>
                        <Button variant='contained' fullWidth>Go</Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <ContactMail style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Contact</h2>
                        <Button variant='contained' fullWidth>Go</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverView
