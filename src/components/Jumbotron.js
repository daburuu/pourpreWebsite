import Typewriter from 'typewriter-effect';

export default function Jumbotron() {

    const typewriter = new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
        loop: true
    });

    return (
        <div className="text-white h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
            <div className="py-24 sm:py-32 md:py-40 relative">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
                    <div className="text-center">
                        <h1 className="text-7xl font-bold">Nous réalisons votre projet
                            <div className="">
                                <Typewriter
                                    options={{
                                        strings: ['selon vos besoins.', 'selon vos contraintes.', 'avec notre expertise.'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    className="text-5xl"
                                ></Typewriter>
                            </div>
                        </h1>
                        <div className="mt-6 text-lg tracking-tight text-gray-300">Chez Pourpre Engineering nous vous accompagnons de A à Z dans la création de votre projet.</div>
                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                            <a className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" href="/#pricing">
                                <span className="">Nos tarifs</span>
                            </a>
                            <a className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-red-500 hover:bg-red-600 disabled:bg-red-500 dark:bg-red-400 dark:hover:bg-red-500 dark:disabled:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 dark:focus-visible:outline-red-400 inline-flex items-center" href="https://calendly.com/derhore-lucas/30min?month=2024-07" rel="noopener noreferrer">
                                <span className="" data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue:8:7">Prendre un rendez-vous</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}