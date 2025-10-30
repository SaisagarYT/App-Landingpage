import React from 'react'
import 'remixicon/fonts/remixicon.css'
import WebImages from './assets/WebImages'
import PhoneComponent from './reusableComponents/PhoneComponent'
import IphoneComponent from './reusableComponents/IphoneComponent'

const App = () => {
  return (
    <div className='w-screen overflow-hidden xl:h-screen max-xl:flex-col-reverse max-xl:items-center max-xl:gap-20 flex bg-(--dark-green)'>
      <section className='w-1/2 max-xl:pt-10 max-sm:w-full max-xl:w-full max-sm:px-10 bg-white px-30 items-start justify-center gap-5 flex flex-col'>
        <div className='text-3xl flex gap-2 items-center font-medium'>
          <i className="ri-space-ship-fill text-4xl text-(--dark-green) rotate-45"></i>
          <h1>CABINMATE</h1>
        </div>
        <h1 className='text-8xl font-bold max-sm:text-5xl'>Download Our App</h1>
        <p className='text-lg text-center max-sm:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sed voluptates enim veniam, sit libero odio sunt, nulla doloremque dolores vitae ut ullam ex eius delectus minus corporis totam neque!lkj aljfald aklaaljfoee sl loole oekd allakdkla</p>
        <ul className='w-110 flex items-center max-sm:w-50'>
          <button>
            <img src={WebImages.playstore} className='' alt="" />
          </button>
          <button>
            <img src={WebImages.appstore} className=' ' alt="" />
          </button>
        </ul>
      </section>
      <section className='w-1/2 max-sm:w-full flex items-center relative justify-center'>
      <div className='absolute max-sm:scale-70 max-sm:right-0 left-25 max-sm:left-0 -rotate-12'>
        <PhoneComponent/>   
      </div>
      <div className='max-sm:scale-70 max-sm:left-5 max-sm:translate-x-13'>
        <IphoneComponent/>
      </div>
      </section>
    </div>
  )
}

export default App
