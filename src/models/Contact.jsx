import React from 'react'

const Contact = ({ closeForm }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='popup-form absolute mt-12 text-black'>
                <form className='w-80 md:w-96 space-y-5 p-5 rounded-xl bg-white'>
                    <h1 className='text-4xl font-semibold text-center'>Book Now!</h1>
                    <div className='flex flex-col'>
                        <input type="text" name='userFirstName' id='userFirstName' placeholder='First Name' className='py-3 px-2 bg-[#d5f2ec] rounded-lg' />
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

                    <div>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out'>Book Appointment!</button>
                        <button className='bg-indigo-400 text-white px-10 rounded-md active:bg-red-500' onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;