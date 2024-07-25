import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state)=>state.user.currentUser)

    useEffect(()=>{
        if (!currentUser.name) {
            navigate('/login')
        }
    },[currentUser.name, navigate])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Auth