import { LockOpen, AccountCircle } from '@mui/icons-material'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormData } from '../../hooks/useFormData'
import { loginInitialState, loginValidationSchema } from './loginRegisterValidationData'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart, loginUserStart } from '../../redux/actions/user.action'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, , , inputChange] = useFormData(loginInitialState, 'product')
    const [errors, setErrors] = useState({})
    const users = useSelector(state => state.user.users)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await loginValidationSchema.validate(formData, { abortEarly: false })
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);

            const user = users.find((usr)=>usr.uid === userCredential.user.uid)
            if (user) {
                dispatch(loginUserStart(user))
                setTimeout(() => {
                    navigate('/admin/dashboard')
                }, 1000)
            }else{

            }
        } catch (error) {
            const newErrors = {}
            if (error.name === 'FirebaseError') {
                newErrors.email = 'Email or password is not valid'
            } else {
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                });
            }
            setErrors(newErrors)
        }
    }

    useEffect(()=>{
        dispatch(getUserStart())
    },[dispatch])


    return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="login">
                        <LockOpen />
                    </IconButton>
                    <Typography variant="h6" className="flex-grow">
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="container px-5 md:w-1/2 py-10 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-3xl text-center font-bold text-red-600 bg-orange-300'>Login</h3>
                <div className="flex flex-wrap mb-10 shadow-md height-auto text-center">
                    <div className="w-full px-4">
                        <form onSubmit={handleSubmit} className="leading-relaxed text-lg md:text-2xl my-2 mb-6 flex flex-col gap-4">
                            <div>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    name='email'
                                    value={formData.email}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <AccountCircle position="start" /> }}
                                />
                                {errors.email && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.email}</p>}
                            </div>
                            <div>
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    name='password'
                                    value={formData.password}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <LockOpen position="start" /> }}
                                />
                                {errors.password && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.password}</p>}
                            </div>
                            <Button type='submit' variant='contained' endIcon={<LockOpen />}>Login</Button>
                        </form>
                        <div className='py-4 '>
                            <Link className='font-semibold text-orange-600' to='/register'>Don't have an account? <span className='text-blue-700 font-bold'>Register</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
