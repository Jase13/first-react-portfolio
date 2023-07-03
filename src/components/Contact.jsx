import React from 'react'

const contact = () => {
  return (
    <div name='contact' className='w-full h-screen
    bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    <div className='flex flex-col p-4 justify-center
    max-w-screen-lg mx-auto h-full text-pink-400 '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white-500'>
                Contact
                </p>
            <p className='py-6'>Submit the form below to get in touch</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/05e99e46-f8c5-4ce6-8867-665502488ebb' method='POST' className=' flex flex-col w-full md:w-1/2'>
                <input 
                type='text'
                 name='name' 
                 placeholder='Enter your name' 
                className='p-2 bg-transparent bg-blue-700 border-4 rounded-md
                 text-pink-400 
                 focus:outline-none' 
                />
                <input
                 type='text' 
                 name='email' 
                 placeholder='Enter your email' 
                className='my-4 p-2 bg-transparent bg-blue-700 border-4 rounded-md
                 text-pink-400 
                 focus:outline-none' 
                />
                <textarea 
                name="message"
                placeholder='Enter your message'
                rows="10" 
                className='p-2
                bg-transparent bg-blue-700 border-4 rounded-md
                 text-pink-400
                focus:outline-none'>
                </textarea>

                <button className='text-white bg-gradient-to-b
                from-cyan-500 to-pink-500 px-6 py-3 my-8 mx-auto flex
                items-center rounded-md hover:scale-110 duration-300'>
                   Let's talk
                 </button>
            </form>
        </div>
    </div>
  </div>
)
}

export default contact