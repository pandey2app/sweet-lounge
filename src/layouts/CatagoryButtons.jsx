import React from 'react'
import ImageButtons from '../components/ImageButtons'

const CatagoryButtons = () => {
    return (
        <>
            <div className=''>
                <h3 className='py-3 mb-4 font-mono text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold text-red-600 bg-orange-300'>Pizzas, Burgers, and Rolls<span className='hidden lg:inline-block'> : Satisfy Your Cravings</span></h3>
                <ImageButtons />
            </div>
        </>
    )
}

export default CatagoryButtons