

'use client'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow container  mx-auto">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 z-0 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-blue-500">Trip</div>
            <div className="text-2xl font-bold text-blue-500">venture</div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Discovery</div>
            <div className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Community</div>
            <div className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Special Deals</div>
            <div className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">About Us</div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Discovery</div>
            <div className="text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Community</div>
            <div className="text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Special Deals</div>
            <div className="text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">About Us</div>
          </div>
        </div>
      </Transition>
    </nav>
  )
}

export default Navbar