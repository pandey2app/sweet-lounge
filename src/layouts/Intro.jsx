import React from 'react'
import profilephoto from '../images/profile.jpg'
import facebook from '../images/facebooklogo.png'
import instagram from '../images/instagramlogo.png'
import twitter from '../images/twitterlogo.png'
import whatsapp from '../images/whatsapplogo.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Intro = () => {
    return (
        <>
            <section className="text-gray-600 md:flex my-10 p-4 bg-slate-500 body-font">
                <div className="container w-8/12 mx-auto flex flex-col">
                    <div className="lg:w-5/6  mx-auto">
                        <div className="flex flex-col sm:flex-row mt-5">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-1">
                                <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center lg:mt-6">
                                    <img src={profilephoto} alt="Sneh Vikash" className="object-cover object-center w-full h-full block" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium mt-4 text-gray-900 text-xl lg:text-4xl">Sneh Vikash</h2>
                                    <div className="w-20 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                                    <p className="text-sm text-white lg:text-xl md:text-left">Under Sneh Vikash's passionate leadership, our brand outlets has become a haven for cake lovers, delivering delectable treats that delight our customers every day. Their unwavering dedication to quality and creativity makes every cake a masterpiece.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-5 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center mr-3 sm:text-left">
                                <p className="leading-relaxed lg:text-xl text-md mb-2 text-white">From our modest beginnings to becoming a cherished local favorite, From hosting intimate birthdays to grand weddings, our cakes have become synonymous with joyous occasions.  our bakery brand's journey is marked by passion, quality, and creativity. Founded with a vision to create irresistible cakes using the finest ingredients, we've grown into a beloved destination known for crafting memorable, delicious treats that bring joy to every celebration.
                                    Founded with passion and quality, our brand has grown into a beloved local favorite for crafting memorable, delicious treats.
                                </p>
                                <h4 className='font-mono text-md md:text-lg lg:mt-20 text-green-500 py-0 mt-2'>Connect Sweet Lounge at social media :</h4>
                                <div className="flex justify-evenly mt-4 items-center">
                                    <Link to="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className='w-10 rounded-full overflow-hidden'>
                                        <img src={facebook} alt="Facebook" className='object-cover object-center'/>
                                    </Link>
                                    <Link to="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className='w-10 rounded-full overflow-hidden'>
                                        <img src={twitter} alt="Twitter" className='object-cover object-center' />
                                    </Link>
                                    <Link to="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className='w-10 rounded-full overflow-hidden'>
                                        <img src={instagram} alt="Instagram" className='object-cover object-center' />
                                    </Link>
                                    <Link to="https://www.whatsapp.com/example" target="_blank" rel="noopener noreferrer" className='w-10 rounded-full overflow-hidden'>
                                        <img src={whatsapp} alt="Whatsapp" className='object-cover object-center' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='w-11/12 m-auto mt-2 bg-green-500 h-1 rounded-xl '></div>
                </div>
                <div className="lg:w-1/3 md:w-4/12  flex flex-col md:ml-auto w-full md:py-0 md:mt-8">
                    <h2 className="text-white font-semibold text-lg mb-1 bg-red-400 py-2 text-center md:text-2xl title-font mt-4"><span className='hidden lg:inline-block'>Your Valuable </span>Feedback Here :</h2>
                    <p className="leading-relaxed text-md mb-5 text-white">We value your feedback! Share your experience with us and help us continue to improve our services. Your thoughts matter.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-lg md:text-xl text-white">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-lg md:text-xl text-white">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-lg md:text-xl text-white">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <Button variant='contained' color='success' className="text-white bg-green-500 border-0 focus:outline-none hover:bg-green-600 py-2 rounded text-lg md:text-xl font-bold" >Send Feedback</Button>
                </div>
            </section>
        </>
    )
}

export default Intro