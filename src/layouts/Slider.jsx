import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../images/cakeSliderProtrait1.jpg'
import slider2 from '../images/cakeSliderProtrait2.jpg'
import slider3 from '../images/cakeSliderProtrait3.jpg'
import slider4 from '../images/cakeSliderProtrait4.jpg'
import slider5 from '../images/cakeSliderProtrait5.jpg'
import slider6 from '../images/cakeSliderProtrait6.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { CakeSharp, PinDrop } from '@mui/icons-material';
import ResponsiveButton from '../components/ResponsiveButton';


const Slider = () => {
    return (
        <>
            <section className="text-gray-600 body-font ">
                <div className="container  bg-orange-300 px-5 mx-auto flex py-3 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-mono sm:text-3xl lg:text-6xl text-2xl font-bold mb-4 text-pink-600">Cakes Which are...</h1>
                        <div className='text-2xl sm:text-4xl lg:text-5xl font-serif text-red-600 mb-12'>
                            <Typewriter
                                words={[
                                    "Delicious",
                                    "Moist",
                                    "Decadent",
                                    "Luscious",
                                    "Scrumptious",
                                    "Fluffy",
                                    "Gourmet",
                                    "Rich",
                                    "Creamy",
                                    "Buttery",
                                    "Velvety",
                                    "Sweet",
                                    "Irresistible",
                                    "Mouthwatering",
                                    "Delectable",
                                    "Heavenly",
                                    "Savory",
                                    "Exquisite",
                                    "Fresh"
                                ]}
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={50}
                                deleteSpeed={25}
                                delaySpeed={2000}
                            />
                        </div>

                        <div className="flex lg:w-5/12 w-full gap-2 justify-between ">
                            <ResponsiveButton name={'Explore Now'} variant='contained' endIcon={<CakeSharp />}/>
                            <ResponsiveButton name={'Locate Outlet'} variant='contained' endIcon={<PinDrop />}/>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="object-cover object-center ">
                            <Carousel autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}>
                                <div>
                                    <img alt={"slider"} src={slider1} />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt={"slider"} src={slider2} />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img alt={"slider"} src={slider3} />
                                    <p className="legend">Legend 3</p>
                                </div>
                                <div>
                                    <img alt={"slider"} src={slider4} />
                                    <p className="legend">Legend 4</p>
                                </div>
                                <div>
                                    <img alt={"slider"} src={slider5} />
                                    <p className="legend">Legend 5</p>
                                </div>
                                <div>
                                    <img alt={"slider"} src={slider6} />
                                    <p className="legend">Legend 6</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider