import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { AccountCircle, Settings, ExitToApp, Home, Category, ProductionQuantityLimits, People, ShoppingBag, ContactMail, MessageSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DashboardComponent = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user.currentUser)

    const clickHandler = (route) => {
        navigate(route)
    }
    return (
        <>
            <section className="text-gray-600 body-font">
            <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="home" onClick={() => clickHandler('/')}>
                            <Home />
                        </IconButton>
                        <Typography variant="h6" className="flex-grow">
                            Dashboard
                        </Typography>
                        <Button color="inherit" onClick={() => clickHandler('/admin/category')}>Categories</Button>
                        <Button color="inherit" onClick={() => clickHandler('/admin/product')}>Products</Button>
                        <Button color="inherit" onClick={() => clickHandler('/admin/user')}>Users</Button>
                        <Button color="inherit" onClick={() => clickHandler('/admin/product')}>Other</Button>
                    </Toolbar>
                </AppBar>
                <h3 className='py-2 text-right pe-4 font-mono font-bold text-lime-600 md:text-xl'>Welcome! <span className='font-semibold capitalize'>{currentUser.name }</span></h3>
                <div className="container px-5 py-8 mx-auto">
                    <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Dashboard</h3>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <MessageSharp style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Messages</h2>
                            <Button variant='contained' fullWidth onClick={() => clickHandler('/admin/messages')}>View</Button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <AccountCircle style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Profile</h2>
                            <Button variant='contained' fullWidth onClick={() => clickHandler('/admin/profile')}>View</Button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <Settings style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Settings</h2>
                            <Button variant='contained' fullWidth>View</Button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <ExitToApp style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Logout</h2>
                            <Button variant='contained' fullWidth>Logout</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                
                <div className="container px-5 pb-4 mx-auto">
                    <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Overview</h3>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <Category style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Categories</h2>
                            <Button variant='contained' fullWidth onClick={() => clickHandler('/admin/category')}>Go</Button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <ProductionQuantityLimits style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Products</h2>
                            <Button variant='contained' fullWidth onClick={() => clickHandler('/admin/product')}>Go</Button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/5 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                                <People style={{ fontSize: 80 }} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Users</h2>
                            <Button variant='contained' fullWidth onClick={() => clickHandler('/admin/user')}>Go</Button>
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
        </>
    )
}

export default DashboardComponent
