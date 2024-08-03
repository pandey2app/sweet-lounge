import { Lock, AccountCircle, Email, Phone, SupervisedUserCircle } from '@mui/icons-material'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormData } from '../../../hooks/useFormData'
import { registerInitialState, registerValidationSchema } from '../../front/loginRegisterValidationData'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { addUserStart, updateUserStart } from '../../../redux/actions/user.action'

const MakeAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)
    const [formData, , setFormData, inputChange] = useFormData(registerInitialState, 'product')
    const { id } = useParams()
    const [errors, setErrors] = useState({})

    const searchUserById = useCallback((id) => {
        let user = users.find((u) => u.id === id)
        setFormData({
            ...user,
            userType: 'admin'
        })
    }, [setFormData, users])

    useEffect(() => {
        if (id) {
            searchUserById(id)
        } else {
            setFormData({ ...registerInitialState })
        }
    }, [searchUserById, setFormData, id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await registerValidationSchema.validate(formData, { abortEarly: false })
            if (id) {
                dispatch(updateUserStart(formData, id));
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
                formData.uid = userCredential.user.uid
                formData.userType = 'admin'
                console.log(formData);
                dispatch(addUserStart(formData))
            }
            setTimeout(() => {
                navigate('/admin/user')
            }, 1000)
        } catch (error) {
            const newErrors = {}
            if (error.name === 'FirebaseError') {
                newErrors.email = 'Email already Registered'
            } else {
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                });
            }
            setErrors(newErrors)
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="register">
                        <AccountCircle />
                    </IconButton>
                    <Typography variant="h6" className="flex-grow">
                        Register
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="container px-5 md:w-1/2 py-10 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-3xl text-center font-bold text-red-600 bg-orange-300'>Register</h3>
                <div className="flex flex-wrap mb-10 shadow-md height-auto text-center">
                    <div className="w-full px-4">
                        <form onSubmit={handleSubmit} className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
                            <div>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    name='name'
                                    type='text'
                                    value={formData.name}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <AccountCircle position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.name && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.name}</p>}
                            </div>
                            <div>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    name='email'
                                    type='email'
                                    value={formData.email}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <Email position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.email && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.email}</p>}
                            </div>
                            <div>
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    name='phone'
                                    type='mobile'
                                    value={formData.phone}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <Phone position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.phone && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.phone}</p>}
                            </div>
                            <div>
                                <TextField
                                    label="User Type"
                                    variant="outlined"
                                    fullWidth
                                    name='userType'
                                    type='text'
                                    value={'Admin'}
                                    aria-readonly
                                    InputProps={{ startAdornment: <SupervisedUserCircle position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.userType && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.userType}</p>}
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
                                    InputProps={{ startAdornment: <Lock position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.password && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.password}</p>}
                            </div>
                            <div>
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={inputChange}
                                    InputProps={{ startAdornment: <Lock position="start" style={{ marginRight: 8 }} /> }}
                                />
                                {errors.confirmPassword && <p className='text-red-700 text-sm font-semibold text-left'>*{errors.confirmPassword}</p>}
                            </div>
                            <Button type='submit' variant='contained' endIcon={<AccountCircle />}>Register</Button>
                        </form>
                        <div className='py-4 '>
                            <Link className='font-semibold text-orange-600' to='/login'>Already have an account? <span className='text-blue-700 font-bold'>Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeAdmin
