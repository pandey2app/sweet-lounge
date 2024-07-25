import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/front/Home'
import ProductDetails from '../pages/front/ProductDetails'
import Cart from '../pages/front/Cart'
import Checkout from '../pages/front/Checkout'
import Auth from '../pages/admin/Auth'
import DashboardComponent from '../pages/admin/dashboard/Dashboard'
import ProfileEdit from '../pages/admin/dashboard/ProfileEdit'
import Order from '../pages/admin/order/Order'
import OrderView from '../pages/admin/order/OrderView'
import Product from '../pages/admin/product/Product'
import AddProduct from '../pages/admin/product/AddProduct'
import EditProduct from '../pages/admin/product/EditProduct'
import CategoryPage from '../pages/admin/category/CategoryPage'
import AddCategory from '../pages/admin/category/AddCategory'
import EditCategory from '../pages/admin/category/EditCategory'
import User from '../pages/admin/user/User'
import AddUser from '../pages/admin/user/AddUser'
import EditUser from '../pages/admin/user/EditUser'
import Login from '../pages/front/Login'
import Register from '../pages/front/Register'
import Products from '../pages/front/Products'
import Outlets from '../pages/front/Outlets'
import ContactUs from '../pages/front/ContactUs'
import NotFound from '../pages/front/NotFound'
import OverView from '../pages/admin/dashboard/OverView'
import Profile from '../pages/admin/Profile'
import PasswordEdit from '../pages/admin/dashboard/PasswordEdit'

const Router = () => {
    return (
        <Routes>
            {/* Front Routes */}

            {/* Home page route */}
            <Route path='/' element={<Home />} />

            {/* products page */}
            <Route path='products' element={<Products />} />

            {/* Outlets page */}
            <Route path='outlets' element={<Outlets />} />

            {/* contact-Us page */}
            <Route path='contact-us' element={<ContactUs />} />


            {/* Product detail page */}
            <Route path='product-details' element={<ProductDetails />} />

            {/* Cart page */}
            <Route path='cart' element={<Cart />} />

            {/* Checkout page */}
            <Route path='checkout' element={<Checkout />} />

            {/* login page */}
            <Route path='login' element={<Login />} />

            {/* register page */}
            <Route path='register' element={<Register />} />

            {/* Admin route */}
            <Route path='admin' element={<Auth />}>

                {/* Dashboard page */}
                <Route path='dashboard' element={<DashboardComponent />} />

                {/* Profile Page */}
                <Route path='profile' element={<Profile />} />

                {/* Profile Edit Page */}
                <Route path='edit-profile' element={<ProfileEdit />} />
                <Route path='edit-password' element={<PasswordEdit />} />


                {/* Overview Page */}
                <Route path='overview' element={<OverView />} />

                {/* Order pages */}
                <Route path='order'>
                    {/* Order list page */}
                    <Route path='' element={<Order />} />

                    {/* Order view page */}
                    <Route path='view' element={<OrderView />} />
                </Route>


                {/* product pages */}
                <Route path='product'>
                    {/* product list page */}
                    <Route path='' element={<Product />} />

                    {/* product add page */}
                    <Route path='add' element={<AddProduct />} />

                    {/* product edit page */}
                    <Route path='edit/:id' element={<EditProduct />} />
                </Route>

                {/* category pages */}
                <Route path='category'>
                    {/* category list page */}
                    <Route path='' element={<CategoryPage />} />

                    {/* category add page */}
                    <Route path='add' element={<AddCategory />} />

                    {/* category edit page */}
                    <Route path='edit/:id' element={<EditCategory />} />
                </Route>

                {/* user pages */}
                <Route path='user'>
                    {/* user list page */}
                    <Route path='' element={<User />} />

                    {/* user add page */}
                    <Route path='add' element={<AddUser />} />

                    {/* user edit page */}
                    <Route path='edit/:id' element={<EditUser />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router