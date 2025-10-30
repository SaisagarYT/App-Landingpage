import React from 'react'
import 'remixicon/fonts/remixicon.css'
import WebImages from './assets/WebImages'
import PhoneComponent from './reusableComponents/PhoneComponent'
import IphoneComponent from './reusableComponents/IphoneComponent'

const App = () => {
  return (
    <div className='w-screen h-screen flex bg-(--dark-green)'>
      <section className='w-1/2 bg-white px-30 items-start justify-center gap-5 flex flex-col'>
        <div className='text-3xl flex gap-2 items-center font-medium'>
          <i className="ri-space-ship-fill text-4xl text-(--dark-green) rotate-45"></i>
          <h1>CABINMATE</h1>
        </div>
        <h1 className='text-8xl font-bold'>Download Our App</h1>
        <p className='text-lg text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sed voluptates enim veniam, sit libero odio sunt, nulla doloremque dolores vitae ut ullam ex eius delectus minus corporis totam neque!lkj aljfald aklaaljfoee sl loole oekd allakdkla</p>
        <ul className='w-110 flex items-center'>
          <button>
            <img src={WebImages.playstore} className='' alt="" />
          </button>
          <button>
            <img src={WebImages.appstore} className=' ' alt="" />
          </button>
        </ul>
      </section>
      <section className='w-1/2 flex items-center relative justify-center'>
      <div className='absolute left-0 -rotate-12'>
        <PhoneComponent/>
      </div>
      <div>
        <IphoneComponent/>
      </div>
      </section>
    </div>
  )
}

export default App
