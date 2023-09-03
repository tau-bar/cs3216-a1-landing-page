'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import Screenshot from '@/public/images/home-page.png'
import BackReward from '@/public/images/back-reward.png'
import HomeReview from '@/public/images/home-review.png'
import FoodDetails from "@/public/images/food-details.png";
import HomeReview2 from '@/public/images/home-review-2.png'
import HomeReward from '@/public/images/home-reward.png'
import Rewards from '@/public/images/rewards.png'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section id="features" className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Embark on Your NUS Food Journey</h1>
            <p className="text-xl text-gray-600">Discover the Possibilities with FoodPrints! Delve into a world of culinary exploration, rewards, and tailored recommendations. Let's Dive In!</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Your Food Discovery Hub</h3>
                <p className="text-xl text-gray-600">Join a thriving food community, explore mouthwatering reviews, and enjoy personalized recommendations. Your campus dining journey begins here!</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
              <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Discover student favourites</div>
                    <div className="text-gray-600">Explore peer-reviewed dishes to make informed choices and enjoy the best campus flavors.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Share Your Tastes Effortlessly</div>
                    <div className="text-gray-600">Reviewing dishes is a breeze with our user-friendly, two-click system. Your insights shape the food community and enhance your dining experience.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-5 h-5 fill-current" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="lightning" class="icon glyph"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18,11.74a1,1,0,0,0-.52-.63L14.09,9.43,15,3.14a1,1,0,0,0-1.78-.75l-7,9a1,1,0,0,0-.17.87,1,1,0,0,0,.59.67l4.27,1.71L10,20.86a1,1,0,0,0,.63,1.07A.92.92,0,0,0,11,22a1,1,0,0,0,.83-.45l6-9A1,1,0,0,0,18,11.74Z"></path></g></svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Earn Rewards with Every Review</div>
                    <div className="text-gray-600">Share your culinary insights and unlock rewards as you help build a vibrant campus food community.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-5 h-5 fill-current" fill="#000000" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>present</title> <path d="M14.188 10.844h3.781c0.906 0 1.656 0.719 1.656 1.656v5.688h-9v-6.625c-0.313-0.094-0.594-0.219-0.781-0.406-0.031 0-0.031-0.031-0.063-0.031 0 0 0 0.031-0.031 0.031-0.219 0.188-0.469 0.313-0.75 0.406v6.625h-9v-5.688c0-0.938 0.719-1.656 1.625-1.656h3.813c-0.438-0.219-0.844-0.531-1.188-0.813-1.5-1.438-1.781-3.438-0.594-4.563 0.5-0.438 1.156-0.688 1.875-0.688 1.031 0 2.094 0.406 3 1.25 0.5 0.469 0.969 1.125 1.25 1.75 0.313-0.625 0.781-1.281 1.281-1.75 0.875-0.844 2-1.25 3-1.25 0.75 0 1.406 0.25 1.875 0.688 1.188 1.125 0.906 3.125-0.625 4.563-0.313 0.281-0.719 0.594-1.125 0.813zM8.625 9.938c0.125-0.281-0.188-1.719-1.219-2.688-0.531-0.5-1.25-0.781-1.875-0.781-0.188 0-0.5 0.031-0.719 0.219-0.063 0.063-0.25 0.188-0.25 0.531 0 0.406 0.25 1.031 0.844 1.563 0.75 0.719 1.938 1.219 2.813 1.219 0.281 0 0.406-0.063 0.406-0.063zM11 9.938c0 0 0.156 0.063 0.406 0.063 0.875 0 2.063-0.5 2.813-1.219 0.594-0.531 0.781-1.156 0.781-1.563 0-0.344-0.156-0.469-0.188-0.531-0.219-0.188-0.563-0.219-0.75-0.219-0.594 0-1.344 0.281-1.875 0.781-1 0.969-1.344 2.375-1.188 2.719v-0.031zM9 27.188h-7.375c-0.906 0-1.625-0.719-1.625-1.625v-5.719h9v7.344zM17.969 27.188h-7.344v-7.344h9v5.719c0 0.906-0.75 1.625-1.656 1.625z"></path> </g></svg>
                  </div>
                </a>
                
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FoodDetails} height={600} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex">
                    <Image className="md:max-w-none mx-auto rounded" src={BackReward} height={600} alt="Features bg" />
                    <Image className="md:max-w-none mx-auto rounded" src={HomeReview2} height={600} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex">
                    <Image className="md:max-w-none mx-auto rounded" src={HomeReward} height={600} alt="Features bg" />
                    <Image className="md:max-w-none mx-auto rounded" src={Rewards} height={600} alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}