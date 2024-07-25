import React from 'react'
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { AccountCircle} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    const clickHandler = (route)=>{
        navigate(route)
    }
    return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="profile">
                        <AccountCircle />
                    </IconButton >
                    <Typography variant="h6" className="flex-grow">
                        Profile
                    </Typography>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/edit-profile')}>Edit Profile</Button>
                    <Button color="inherit" onClick={()=>clickHandler('/admin/edit-password')}>Security</Button>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <div className="container px-5 py-2 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>{'aditya prakash pandey'}</h3>
                
                <div className="w-full md:w-1/2 m-auto mt-3 lg:w-1/3 mb-10 px-4">
                    <div className="rounded-full w-64 m-auto h-64 overflow-hidden bg-gray-200">
                        <img src='https://firebasestorage.googleapis.com/v0/b/sweetloungeapp.appspot.com/o/product%2Faditya-team-lead.jpg?alt=media&token=929305b0-8f46-48ee-a13d-31d4648aef98' alt={'name'} height={'100%'} />
                    </div>
                    <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">{'aditya'}</h2>
                    <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">{'aditya'}</h2>
                    <h2 className="title-font text-2xl text-center font-medium text-gray-900 mt-6 mb-3">{'aditya'}</h2>
                </div>
            </div>
        </section>
    )
}

export default Profile
