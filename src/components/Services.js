import { SpotlightCard } from "./elements/spotlight.tsx";
import Spotlight from "./elements/spotlight.tsx";
import { Icon } from '@iconify/react';

export default function Services({ }) {

    return (
        <div className="py-24 sm:py32">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col mt-12">
                <div className="text-center flex flex-col items-center">
                    <div className="mb-2 text-base/7 font-semibold text-red-400">Services</div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Pourquoi choisir nos services ?</h2>
                    <div className="mt-6 text-lg/8 text-gray-300 mb-8">Nous respectons votre produit, pour une satisfation a 100%</div>
                    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
                        {/* Card #1 */}
                        <SpotlightCard className="mb-8">
                            <div className="relative h-full bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-red-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card01} width={200} height={200} alt="Card 01" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" color="#97eda3" icon="line-md:document-report" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">Audit</h2>
                                        <p className="text-sm text-slate-500 text-left">Audit de votre site pour apporter notre exprtise.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        {/* Card #2 */}
                        <SpotlightCard className="mb-8">
                            <div className="relative h-full  bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card02} width={200} height={200} alt="Card 02" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" color="white" icon="line-md:cog" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">Développement Web</h2>
                                        <p className="text-sm text-slate-500 text-left">Développement de votre projet dans le respect de votre idée selon vos besoins.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        {/* Card #3 */}
                        <SpotlightCard className="mb-8">
                            <div className="relative h-full  bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card03} width={200} height={200} alt="Card 03" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" color="d8d2d2" icon="line-md:marker" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">Création de Logo</h2>
                                        <p className="text-sm text-slate-500 text-left">Notre pôle design à votre service pour crée votre logo.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </Spotlight>
                    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
                        {/* Card #1 */}
                        <SpotlightCard className="mt-8">
                            <div className="relative h-full  bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-red-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card01} width={200} height={200} alt="Card 01" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" icon="icon-park:blockchain" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">Blockchain</h2>
                                        <p className="text-sm text-slate-500 text-left">Création de votre projet blockchain, smart contract, automatisation de transaction cryptomonnaie.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        {/* Card #2 */}
                        <SpotlightCard className="mt-8">
                            <div className="relative h-full  bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card02} width={200} height={200} alt="Card 02" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" color="white" icon="icon-park:seo" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">SEO</h2>
                                        <p className="text-sm text-slate-500 text-left">Mise en place et optimisation de référencement, pour être toujours le numéro 1.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        {/* Card #3 */}
                        <SpotlightCard className="mt-8">
                            <div className="relative h-full  bg-[#18181B] p-6 pb-2 rounded-[inherit] z-20 overflow-hidden">
                                {/* Radial gradient */}
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    {/* <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div> */}
                                </div>
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        {/* <Image className="inline-flex" src={Card03} width={200} height={200} alt="Card 03" /> */}
                                    </div>
                                    {/* Text */}
                                    <div className="grow mb-5">
                                        <Icon className="w-10 h-10 lg:w-10 lg:h-10 mb-5" color="#F77171" icon="line-md:heart-filled" />
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 text-left">Client First</h2>
                                        <p className="text-sm text-slate-500 text-left">Votre projet est notre priorité.</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </Spotlight>
                </div>
            </div>
        </div>
    )
}