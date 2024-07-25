import { ContactPage, Launch, Place } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const Outlets = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Our Outlets<span className='hidden md:inline-block'> : Find Us Near You</span></h3>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4 border-b-2 border-red-800 md:border-0">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">V.M. Field <span>(Main branch)</span></h2>
                            <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">Shop no-10, Janak Super Market Gopalganj (841428)</div>
                            <div className='flex gap-2 justify-evenly mb-2'>
                                <Button variant='contained' endIcon={<Launch />}>view</Button>
                                <Button variant='contained' endIcon={<Place />}>locate</Button>
                                <Button variant='contained' endIcon={<ContactPage />}>contact</Button>
                            </div>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4  border-b-2 border-red-800 md:border-0">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Janak Super Market <span>(Outlet)</span></h2>
                            <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">Shop no-10, Janak Super Market Gopalganj (841428)</div>

                            <div className='flex gap-2 justify-evenly mb-2'>
                                <Button variant='contained' endIcon={<Launch />}>view</Button>
                                <Button variant='contained' endIcon={<Place />}>locate</Button>
                                <Button variant='contained' endIcon={<ContactPage />}>contact</Button>
                            </div>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4  border-b-2 border-red-800 md:border-0">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Post office <span>(Outlet)</span></h2>
                            <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">Shop no-10, Janak Super Market Gopalganj (841428)</div>

                            <div className='flex gap-2 justify-evenly mb-2'>
                                <Button variant='contained' endIcon={<Launch />}>view</Button>
                                <Button variant='contained' endIcon={<Place />}>locate</Button>
                                <Button variant='contained' endIcon={<ContactPage />}>contact</Button>
                            </div>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4  border-b-2 border-red-800 md:border-0">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Barauli <span>(Outlet)</span></h2>
                            <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">Shop no-10, Janak Super Market Gopalganj (841428)</div>

                            <div className='flex gap-2 justify-evenly mb-2'>
                                <Button variant='contained' endIcon={<Launch />}>view</Button>
                                <Button variant='contained' endIcon={<Place />}>locate</Button>
                                <Button variant='contained' endIcon={<ContactPage />}>contact</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Outlets