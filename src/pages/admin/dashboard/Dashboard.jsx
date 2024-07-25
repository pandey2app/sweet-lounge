import React from 'react'
import { Button } from '@mui/material'
import { Dashboard, AccountCircle, Settings, ExitToApp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const DashboardComponent = () => {
    const navigate = useNavigate()
    const clickHandler = (route)=>{
        navigate(route)
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Dashboard</h3>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <Dashboard style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Overview</h2>
                        <Button variant='contained' fullWidth onClick={()=>clickHandler('/admin/overview')}>View</Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <AccountCircle style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Profile</h2>
                        <Button variant='contained' fullWidth onClick={()=>clickHandler('/admin/profile')}>View</Button>
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
    )
}

export default DashboardComponent
