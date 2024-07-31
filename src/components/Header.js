import { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

export default function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            // console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function () {
            // console.log('end', arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <header className="backdrop-blur -mb-px sticky top-0 z-50 lg:!border-gray-700">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[4rem]">
                <div className="lg:flex-1 flex items-center gap-1.5">
                    <ScrollLink
                        to="jumbotron"
                        smooth={true}>
                        <a
                            aria-current="page"
                            href="/"
                            className="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-white flex items-end gap-1.5"
                            aria-label="Pourpre Engineering"
                        >
                            Pourpre Engineering
                            <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-red-400 bg-opacity-10 text-red-400 ring-1 ring-inset ring-red-400 ring-opacity-25 mb-0.5">
                                Beta
                            </span>
                        </a>
                    </ScrollLink>
                </div>

                <ul className="items-center ring-1 ring-gray-800 px-3 gap-x-0 rounded-full hidden lg:flex">
                    <li className="relative">
                        <ScrollLink
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:bg-red-400 after:transition-opacity ${activeSection === 'services'
                                ? 'text-red-400 after:opacity-100'
                                : 'text-gray-400 hover:text-red-400 after:opacity-0'
                                }`}
                            onSetActive={handleSetActive}
                        >
                            Services
                        </ScrollLink>
                    </li>
                    <li className="relative">
                        <ScrollLink
                            to="tarifs"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:bg-red-400 after:transition-opacity ${activeSection === 'tarifs'
                                ? 'text-red-400 after:opacity-100'
                                : 'text-gray-400 hover:text-red-400 after:opacity-0'
                                }`}
                            onSetActive={handleSetActive}
                        >
                            Tarifs
                        </ScrollLink>
                    </li>
                    <li className="relative">
                        <ScrollLink
                            to="temoignages"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:bg-red-400 after:transition-opacity ${activeSection === 'temoignages'
                                ? 'text-red-400 after:opacity-100'
                                : 'text-gray-400 hover:text-red-400 after:opacity-0'
                                }`}
                            onSetActive={handleSetActive}
                        >
                            Témoignages
                        </ScrollLink>
                    </li>
                    <li className="relative">
                        <ScrollLink
                            to="calendly"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:bg-red-400 after:transition-opacity ${activeSection === 'calendly'
                                ? 'text-red-400 after:opacity-100'
                                : 'text-gray-400 hover:text-red-400 after:opacity-0'
                                }`}
                            onSetActive={handleSetActive}
                        >
                            Calendly
                        </ScrollLink>
                    </li>
                    <li className="relative">
                        <ScrollLink
                            to="faq"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:bg-red-400 after:transition-opacity ${activeSection === 'faq'
                                ? 'text-red-400 after:opacity-100'
                                : 'text-gray-400 hover:text-red-400 after:opacity-0'
                                }`}
                            onSetActive={handleSetActive}
                        >
                            FAQ
                        </ScrollLink>
                    </li>
                </ul>

                <div className="flex items-center justify-end lg:flex-1 gap-1.5">
                    <a
                        className="hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-700 text-white bg-[#18181B] hover:bg-gray-800/50 disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex"
                        style={{ border: '1px solid #F77171' }}
                        href="https://calendly.com/derhore-lucas/30min?month=2024-07"
                        rel="noopener noreferrer"
                    >
                        <span className="">Prendre un rendez-vous</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                    <button
                        type="button"
                        className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
