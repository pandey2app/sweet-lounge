import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { People, Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmIdentity = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user.currentUser)

    const handleClose = () => {
        setOpen(false)
        navigate('/admin/user')
    };
    const [formData, setFormData] = useState({
        userID: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validationSchema = Yup.object().shape({
        userID: Yup.string()
            .required('Please Enter user ID'),
        password: Yup.string()
            .required('Please enter a password')
    });

    const validate = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            if (formData.userID === currentUser.email && formData.password === currentUser.password) {
                setErrors({});
                return true;
            }else{
                throw new Error('Invalid Credentials')
            }
        } catch (err) {
            const validationErrors = {};
            if (err.message === 'Invalid Credentials') {
                validationErrors.invalidCredentials = err.message
                console.log(validationErrors);
                setErrors(validationErrors)
                
                // navigate('/admin/user')
                return false
            }
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            return false;
        }
    };
    
    const handleHover = (e, btn)=>{
        if(btn === "cancle"){
            e.target.style.backgroundColor = "orange"
            e.target.style.color = "white"
        }else{
            e.target.style.backgroundColor = "green"
            e.target.style.color = "white"
        }
    } 

    const handleUnHover = (e, btn)=>{
        if(btn === "cancle"){
            e.target.style.backgroundColor = "white"
            e.target.style.color = "orange"
        }else{
            e.target.style.backgroundColor = "white"
            e.target.style.color = "green"
        }
    } 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await validate()) {
            navigate('/admin/user/add-admin')
            handleClose();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} className='bg-orange-300'>
            <form onSubmit={handleSubmit} className='bg-slate-200'>
                <DialogTitle>Confirm Identity</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="userID"
                        label="User ID"
                        type={'email'}
                        fullWidth
                        variant="outlined"
                        name="userID"
                        value={formData.userID}
                        onChange={handleChange}
                        error={Boolean(errors.userID)}
                        helperText={errors.userID}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton >
                                        {<People />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        variant="outlined"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {errors.invalidCredentials && <div className=' text-red-700 font-semibold my-2'>*{errors.invalidCredentials}</div>}
                </DialogContent>
                <DialogActions className='font-bold me-4 mb-1'>
                    <Button onClick={handleClose} color="warning" variant='outlined' size='small' onMouseOver={(e)=>handleHover(e,"cancle")} onMouseLeave={(e)=>handleUnHover(e, 'cancle')}>
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" variant='outlined' size='small' onMouseOver={(e)=>handleHover(e, 'confirm')} onMouseLeave={(e)=>handleUnHover(e, 'confirm')}>
                        Confirm
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ConfirmIdentity;
