export default function Footer() {
  return (
    <footer className="relative">
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
          <div className="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"></div>
          <div className="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>
          <div className="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
            <p className="text-gray-500 dark:text-gray-400 text-sm"> Copyright © 2024. All rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  )
}