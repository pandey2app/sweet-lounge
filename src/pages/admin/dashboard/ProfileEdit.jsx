import { AccountCircle, ArrowBack, Email, Phone, Save } from '@mui/icons-material'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileEdit = () => {
    const navigate = useNavigate()
  return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="profile" onClick={()=>navigate('/admin/profile')}>
                        <AccountCircle />
                    </IconButton >
                    <Typography variant="h6" className="flex-grow">
                        Profile
                    </Typography>
                    <Button color="inherit" onClick={()=>navigate('/admin/profile')} endIcon={<ArrowBack />}>Back To Profile</Button>
                </Toolbar>
            </AppBar>
            <div className="container px-5 py-2 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Edit Profile</h3>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="w-full px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center mb-6">
                            <AccountCircle style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Update Your Information</h2>
                        <form className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
                            <TextField label="Name" variant="outlined" fullWidth InputProps={{ startAdornment: <AccountCircle position="start" /> }} />
                            <TextField label="Email" variant="outlined" fullWidth InputProps={{ startAdornment: <Email position="start" /> }} />
                            <TextField label="Phone" variant="outlined" fullWidth InputProps={{ startAdornment: <Phone position="start" /> }} />
                            <Button variant='contained' endIcon={<Save />}>Save</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProfileEdit