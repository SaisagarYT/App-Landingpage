import React from 'react'
import LandingPageInput from './LandingPageInput'


const PhoneComponent = () => {
  return (
    <div className='w-80 h-155 relative bg-(--gold) rounded-3xl flex shadow-2xl items-center justify-center'>
          <div className='w-1.5 top-2/5 rounded-r-sm -right-1 bg-(--gold) h-10 absolute'>

          </div>
          <div className='w-1.5 top-1/5 rounded-r-sm -right-1 bg-(--gold) h-10 absolute'>

          </div>
          <div className='w-1.5 mt-4 top-1/4 rounded-r-sm -right-1 bg-(--gold) h-10 absolute'>

          </div>
          <div className='w-[98%] h-[98%] flex items-center justify-center bg-black/95 border border-black rounded-3xl'>
            <div className='w-[95%] h-[98%] items-center relative flex justify-center flex-col bg-white rounded-3xl'>
              <div className='w-4 top-1.5 rounded-full flex items-center justify-center bg-black/95 absolute h-4'>
                <div className='w-2 h-2 bg-gray-700 rounded-full'>

                </div>
              </div>
              <h1 className='text-4xl text-(--dark-green) font-medium pb-5'>CABINMATE</h1>
              <div className='w-[85%] px-5 bg-white gap-5 flex items-center justify-start py-7 flex-col h-80 shadow-2xl border border-green-300 shadow-green-300 rounded-2xl'>
                <LandingPageInput title={'Email'}/>
                <LandingPageInput title={'Password'}/>
                <button className='text-white cursor-pointer hover:opacity-75  active:bg-black bg-(--dark-green) font-medium py-3 rounded-2xl w-full'>
                  Log in
                </button>
                <a href='/'>Forget password?</a>
              </div>
              <p className='text-lg pt-8 font-medium'>Sign Up</p>
            </div>
          </div>
        </div>
  )
}

export default PhoneComponent
