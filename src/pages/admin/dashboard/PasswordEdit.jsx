import { Lock, LockOpen, ArrowBack, Save } from '@mui/icons-material'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordEdit = () => {
    const navigate = useNavigate()
    return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="password" >
                        <LockOpen />
                    </IconButton>
                    <Typography variant="h6" className="flex-grow">
                        Change Password
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/admin/profile')} endIcon={<ArrowBack />}>Back To Profile</Button>
                </Toolbar>
            </AppBar>
            <div className="container px-5 py-8 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Change Password</h3>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="w-full px-4">
                        <div className="rounded-lg h-64 overflow-hidden bg-gray-200 flex items-center justify-center mb-6">
                            <Lock style={{ fontSize: 80 }} />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Update Your Password</h2>
                        <form className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
                            <TextField
                                label="Current Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                InputProps={{ startAdornment: <LockOpen position="start" /> }}
                            />
                            <TextField
                                label="New Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                InputProps={{ startAdornment: <Lock position="start" /> }}
                            />
                            <TextField
                                label="Confirm New Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                InputProps={{ startAdornment: <Lock position="start" /> }}
                            />
                            <Button variant='contained' endIcon={<Save />}>Save</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PasswordEdit
