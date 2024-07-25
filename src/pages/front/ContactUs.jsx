import { ContactPage, Email, Phone, Place } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'

const ContactUs = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h3 className='py-3 mb-4 font-mono text-2xl md:text-5xl text-center font-bold text-red-600 bg-orange-300'>Contact Us</h3>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-full mb-10 px-4 border-b-2 border-red-800 md:border-0">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Head Office</h2>
                        <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">123 Main Street, City, Country</div>
                        <div className='flex md:flex-row flex-col gap-2 items-center justify-evenly mb-2'>
                            <Button variant='contained' startIcon={<Phone />} className="mb-2">+1 234 567 890</Button>
                            <Button variant='contained' startIcon={<Email />}>headoffice@example.com</Button>
                            <Button variant='contained' startIcon={<Place />}>Locate</Button>
                        </div>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4 border-b-2 border-red-800 md:border-0">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Branch 1</h2>
                        <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">456 Another St, City, Country</div>
                        <div className='flex md:flex-row flex-col gap-2 items-center justify-evenly mb-2'>
                            <Button variant='contained' startIcon={<Phone />} className="mb-2">+1 234 567 891</Button>
                            <Button variant='contained' startIcon={<Email />}>branch1@example.com</Button>
                            <Button variant='contained' startIcon={<Place />}>Locate</Button>
                        </div>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Branch 2</h2>
                        <div className="leading-relaxed text-lg md:text-2xl my-2 mb-4">789 Another St, City, Country</div>
                        <div className='flex md:flex-row flex-col gap-2 items-center justify-evenly mb-2'>
                            <Button variant='contained' startIcon={<Phone />} className="mb-2">+1 234 567 892</Button>
                            <Button variant='contained' startIcon={<Email />}>branch2@example.com</Button>
                            <Button variant='contained' startIcon={<Place />}>Locate</Button>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Send Us a Message</h2>
                        <form className="leading-relaxed text-lg md:text-2xl my-2 mb-4 flex flex-col gap-4">
                            <TextField label="Name" variant="outlined" fullWidth />
                            <TextField label="Email" variant="outlined" fullWidth />
                            <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                            <Button variant='contained' endIcon={<ContactPage />}>Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
