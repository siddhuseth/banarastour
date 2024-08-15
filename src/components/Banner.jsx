import React from 'react';
import photo from '../../public/1c.jpg';
export default function banner() {
  return (
    <>
        <div className=" max-w-screer-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
              <div className="space-y-8">
              <h className="text-6xl font-bold text-orange-500">Banaras</h>
              <p className="text-justify">Banaras/Varanasi/Kashi - is devbhumi of bhagwan shiv.
              Varanasi is located in the state of Uttar Pradesh in northern India. Varanasi is one of the oldest cities in the world. Varanasi has long been a renowned hub for education. Sanskrit, yoga, the Hindi language, and authors like the renowned novelist Prem Chand and the well-known saint-poet Tulsi Das are all celebrated in Varanasi. Varanasi, therefore, is also referred to as the cultural capital of India. People travel from all over the world to Varanasi visiting places to bathe in the Ganges River, which is said to wash away sins.</p>
              </div>
              <button className="border btn mt-3 glass" href="">Explore Banaras</button>
            </div>
          <div className="order-1 w-full md:w-1/2 mt-12 md:mt-28">
            <img src={photo} className='w-92 h-92 ml-5' alt='' />
          </div>
        </div>
    </>
  )
}
