import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Calendly() {
  return (
    <div className="py-24 sm:py-32 bg-opacity-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="relative">
          <div className="flex flex-col gap-16 sm:gap-y-24 sm:p-6 py-24 sm:py-32 px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-2 text-base font-semibold text-red-400">Calendly</div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prendre un rendez-vous</h2>
              <div className="mt-6 text-lg/8 text-gray-300">
                Vous pouvez réserver un appel avec nous quand vous voulez grâce à notre Calendly.
              </div>
              {/* <div className="flex items-center gap-x-6 justify-center">
                <a
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white text-gray-900 bg-gray-900 hover:bg-red-400 disabled:bg-gray-900 bg-white hover:bg-red-400 disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center"
                  href="https://calendly.com/derhore-lucas/30min?month=2024-07"
                  rel="noopener noreferrer"
                >
                  <span>Réserver un appel</span>
                </a>
              </div> */}
              <div>
                <InlineWidget url="https://calendly.com/derhore-lucas/30min?month=2024-07" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
