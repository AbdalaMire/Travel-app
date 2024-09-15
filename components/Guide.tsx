import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We Are In Your Community To Accompany You
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[200pxpx]">Your Tourism Helper</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[500px]">We are hereby to help you with your tourism around the world 
            and you don't have to worry while we are with you 
            since we will help you all your trip affairs through online and offline
            Every time, Every where and Every condition We are with You</p>
        </div>

      </div>
      <div className="flexCenter max-container relative w-full">
        <Image 
           src="/boat.jpeg"
           alt="boat"
           width={1440}
           height={580}
           className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg: top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination </p>
                <p className="bold-16 text-green-50"> 7 hours & 46 min</p>
              </div>
              <p className="bold-20 mt-2">Liido Beach</p>
            </div>

            <div className="flex w-full flex-col">
                <p className="regular-16 text-gray-20">Start Point</p>
                <h4 className="bold-20 mt-2 whitespace-nowrap">Bosaso</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
