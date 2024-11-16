import React from 'react'
import Button from '../layouts/Button';

const Contact = ({ closeForm }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='popup-form absolute mt-12 text-black'>
                <form className='w-80 md:w-96 space-y-5 p-5 rounded-xl bg-white'>
                    <h1 className='text-4xl font-semibold text-center text-backgroundColor'>Book Now!</h1>
                    <div className='flex flex-col'>
                        <input type="text" name='userFirstName' id='userFirstName' placeholder='First Name' className='py-3 px-2 bg-[#d5f2ec] rounded-lg border-black' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='userLastname' id='userLastname' placeholder='Last Name' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="email" name='userEmail' id='userEmail' placeholder='Email' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="number" name='userNumber' id='userNumber' placeholder='Phone No.' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
                    </div>

                    <div className='flex gap-5'>
                        <Button title="Book Appointment">Book Appointment!</Button>
                        <button className='bg-indigo-400 text-white px-10 rounded-md active:bg-red-500' onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;