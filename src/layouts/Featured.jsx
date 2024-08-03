import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { AddShoppingCart, KeyboardArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useCart } from '../hooks/useCart'
import { getProductStart } from '../redux/actions/product.action'



const Featured = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)?.slice(0,8)
  const [, addTocart] = useCart()

  useEffect(()=>{
    dispatch(getProductStart())
  },[])
  
  return (
    <>
      <section className="text-gray-600 bg-orange-200 body-font">
        <div className="container px-5 py-8 mx-auto">
          <h3 className='py-3 mb-4 font-mono text-2xl md:text-4xl lg:text-5xl text-center font-bold text-red-600 bg-orange-300'>Most Loved Cakes<span className='hidden lg:inline-block'>&nbsp;by Our Customers</span></h3>
          <div className="flex flex-wrap border-2 border-red-500">
            {
              products.length > 0 && products.map((product, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full border-b-2 border-pink-900 md:border-0">
                  <Link className="block relative h-52 rounded bg-slate-500 overflow-hidden">
                    <img alt={product.productName} className="object-contain object-center w-full h-full block" src={product.image} />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.flavor}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.productName}</h2>
                    <div className='flex gap-2 justify-between'>
                      <Button variant='contained' color='success' endIcon={<KeyboardArrowRight />} onClick={()=>console.log('')}>Buy Now</Button>
                      <Button variant='contained' color='success' endIcon={<AddShoppingCart />} onClick={()=>addTocart(product)}>Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured