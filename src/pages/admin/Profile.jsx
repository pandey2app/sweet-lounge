import React from 'react'
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { AccountCircle} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
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
                <h3 className='py-3 mb-4 text-2xl md:text-5xl text-center font-bold capitalize font-serif text-red-600 bg-orange-300'>{currentUser.name}</h3>
                
                <div className="w-full md:w-1/2 m-auto mt-3 lg:w-1/3 mb-10 px-4">
                    <div className="rounded-full w-64 m-auto h-64 overflow-hidden bg-blue-500">
                        <img src={currentUser.image} alt={currentUser.name} height={'100%'} />
                    </div>
                    <p className="title-font text-2xl text-center mx-16 rounded-xl py-1  bg-orange-300 font-mono font-semibold capitalize text-gray-900 mt-6 mb-3">{`${currentUser.field} (${currentUser.role})`}</p>
                </div>
            </div>
        </section>
    )
}

export default Profile
