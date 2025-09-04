import React from 'react'
import Image from 'next/image'

function Guide() {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
        <p className='uppercase regular-18'>
          We are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
            Guide you to Easy Path
          </h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus dolor. Necessitatibus officia officiis veniam commodi, eum, distinctio sapiente ipsa soluta a recusandae ea possimus porro aut quisquam iusto iure!
          </p>
        </div>
      </div>

      {/* boat image section  */}
      <div className='flexCenter max-container relative w-full border-2 border-blue-500'>
        <Image
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
        {/* floating tag over the boat image */}
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xlborder shadow-md md:left-[5%] lg:top-20'>

        </div>
      </div>

    </section>
  )
}

export default Guide