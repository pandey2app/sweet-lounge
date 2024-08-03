import React, { useRef } from 'react'
import logo from '../images/SLlogo.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import SplitButton from '../components/SplitButton'
import { Button } from '@mui/material'
import { ExitToApp, Launch, Login } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { logoutUserStart } from '../redux/actions/user.action'
import ResponsiveButton from '../components/ResponsiveButton'


const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const { pathname } = useLocation()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mobileNavbar = useRef()

    const navbarToggler = () => {
        mobileNavbar.current.classList.toggle('hidden')
        mobileNavbar.current.classList.toggle('overflow-hidden')
        mobileNavbar.current.classList.toggle('h-auto')
    }

    const navbarCloser = () => {
        mobileNavbar.current.classList.add('hidden')
        mobileNavbar.current.classList.add('overflow-hidden')
        mobileNavbar.current.classList.add('h-0')
    }


    const logoutHandler = async () => {
        try {
            await signOut(auth)
            dispatch(logoutUserStart())
            setTimeout(() => {
                navigate('login')
            }, 1000)

        } catch (error) {

        }
    }
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex md:p-2 p-2 items-center justify-between">
                    <div
                        className='block lg:hidden relative'
                    >
                        <MenuIcon onClick={navbarToggler} id='mobile-menu' fontSize='large' ></MenuIcon>
                        <nav
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                backdropFilter: 'blur(10px)'
                            }}
                            ref={mobileNavbar}
                            className="flex-col gap-2 items-center  text-white justify-center transition-all overflow-hidden hidden z-10 px-1 pb-1 absolute top-9 h-0"
                        >
                            <div className='mb-2'><SplitButton name='outlets' options={['VM field', 'Post Office', 'Janak super']} /></div>
                            <div className='mb-2'><SplitButton name='products' options={['Cakes', 'Icecreames', 'Chocolates']} /></div>
                            <div onClick={() => { navbarCloser() }} className='mb-2'><Button variant='contained' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} endIcon={<Launch />}>Orders</Button></div>
                            <div onClick={() => { navbarCloser() }} className=''><Button onClick={() => navigate('/contact-us')} variant='contained' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} endIcon={<Launch />}>Contact Us</Button></div>
                        </nav>
                    </div>
                    <div className="flex title-font font-sm items-center text-gray-900">
                        <div onClick={() => { navbarCloser(); navigate('/') }} className='md:h-28 cursor-pointer h-14 md:w-28 w-14 flex justify-center items-center ounded-full overflow-hidden'>
                            <img src={logo} alt="Sweet Lounge" width="100%" />
                        </div>
                        <NavLink to={'/'} onClick={() => { navbarCloser() }} className=" text-amber-500 text-xl font-serif md:text-6xl md:ms-9"><span className='text-red-700 font-extrabold inline-block'>Sweet</span> <sub className='text-blue-700 font-extrabold ms-2 inline-block'>Lounge</sub></NavLink>
                    </div>
                    <nav className="md:ml-auto flex-wrap items-center  text-base justify-center hidden lg:flex">
                        {
                            currentUser.userType?.toLowerCase() !== 'admin' && pathname !== '/admin/dashboard' &&
                                <div className='me-2'><SplitButton name='Outlets' options={['VM field', 'Post Office', 'Janak super']} /></div>
                        }
                        {
                            currentUser.userType?.toLowerCase() !== 'admin' && pathname !== '/admin/dashboard' &&
                                <div className='me-2'><SplitButton name='Products' options={['Cakes', 'Icecreames', 'Chocolates']} /></div>
                        }
                        {
                            currentUser.name && currentUser.userType?.toLowerCase() !== 'admin' && <div className='me-2'><ResponsiveButton name='Orders' variant='contained' /></div>
                        }
                        {
                            currentUser.userType?.toLowerCase() === 'admin' && pathname !== '/admin/dashboard' ?
                                <div className='me-2'><ResponsiveButton name='Dashboard' onClick={() => navigate('/admin/dashboard')} variant='contained' /></div> : ''
                        }
                        {
                            currentUser.userType?.toLowerCase() !== 'admin' ?
                                <div className='me-2'><ResponsiveButton name='Contact Us' onClick={() => navigate('/contact-us')} variant='contained' /></div> : ''
                        }
                    </nav>
                    <div className=' md:mt-0 ms-2 h-10 flex items-center'>
                        {!currentUser.name && pathname !== '/login' &&
                            <ResponsiveButton name='Login' variant='contained' endIcon={<Login />} onClick={() => navigate('login')} className="border-0 py-1 px-3 focus:shadow-sm rounded " />
                        }
                        {currentUser.name &&
                            <ResponsiveButton name='Logout' variant='contained' endIcon={<ExitToApp />} onClick={logoutHandler} className="border-0 py-1 px-3 focus:shadow-sm rounded" />
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header