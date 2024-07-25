import React from 'react'
import cake1 from '../images/cake1.jpg'
import cake2 from '../images/cake2.jpg'
import cake3 from '../images/cake3.jpg'
import cake4 from '../images/cake4.jpg'
import cake5 from '../images/cake5.jpg'
import cake6 from '../images/cake6.jpg'
import cake7 from '../images/cake7.jpg'
import cake8 from '../images/cake8.jpg'
import { Button } from '@mui/material'
import { AddShoppingCart, KeyboardArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'



const Featured = () => {
  return (
    <>
      <section className="text-gray-600 bg-orange-200 body-font">
        <div className="container px-5 py-8 mx-auto">
          <h3 className='py-3 mb-4 font-mono text-2xl md:text-4xl lg:text-5xl text-center font-bold text-red-600 bg-orange-300'>Most Loved Cakes<span className='hidden lg:inline-block'>&nbsp;by Our Customers</span></h3>
          <div className="flex flex-wrap border-2 border-red-500">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake1} />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Chocolate</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Red Velvet</h2>
                <div className='flex gap-2 justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake2} />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Chocolate</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <div className='flex gap-2  justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake3}/>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vanilla</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <div className='flex gap-2 justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake4} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Red Velvet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex gap-2  justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake5} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Red Velvet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex gap-2 justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake6} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Red Velvet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex gap-2 justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake7} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Red Velvet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex gap-2  justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full  border-b-2 border-pink-900 md:border-0">
              <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={cake8} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Red Velvet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex gap-2 justify-between'><Button variant='contained' color='success' endIcon={<KeyboardArrowRight/>}>Buy Now</Button><Button variant='contained' color='success' endIcon={<AddShoppingCart/>}>Add to Cart</Button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured