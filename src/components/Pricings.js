import { Icon } from '@iconify/react';

export default function Pricings({ }) {

  return (
    <div className="py-24 sm:py32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col mt-12">
        <div className="text-center flex flex-col items-center">
          <div className="mb-2 text-base/7 font-semibold text-red-400">Tarifs</div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Des prix transparents et tout inclus</h2>
          <div className="mt-6 text-lg/8 text-gray-300 mb-20">Nous respectons votre produit, pour une satisfation a 100%</div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 w-full justify-center items-center gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)] gap-x-0" id="pricing">
            <div className="rounded-xl bg-[#18181B] ring-1 ring-gray-800 shadow  relative flex flex-col self-stretch w-full">
              <div className="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10" >
                <div className="">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl text-white sm:text-3xl font-semibold truncate">Audit de votre projet</p>
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 mt-2 text-left">Une audit complète de votre site par notre équipe.</div>
                </div>
                <div className="flex flex-row items-baseline gap-x-1">
                  <p className="text-white text-2xl sm:text-4xl font-semibold">200€</p>
                </div>
                <div className="order-last flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit Technique</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit SEO</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit de Contenu</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit UX (Expérience Utilisateur)</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit des Conversions</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit de la Performance Analytique</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Audit de la Concurrence</span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button type="button" className="focus:outline-none focus-visible:outline-0 bg-[#27272A] disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-800  text-gray-200 hover:bg-red-400 disabled:bg-gray-50 hover:bg-gray-700/50 disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 w-full flex justify-center items-center">
                    <span className="">Choisir cette offre</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#18181B] shadow  relative flex flex-col self-stretch w-full ring-2 ring-red-400 ring-red-400 lg:scale-[1.1] lg:z-10">
              <div className="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10">
                <div className="">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl text-white sm:text-3xl font-semibold truncate">Votre site marchand</p>
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 mt-2 text-left">E-commerce - Landing page.
                  </div>
                </div>
                <div className="flex flex-row items-baseline gap-x-1">
                  <p className="text-white text-2xl sm:text-4xl font-semibold">Sur devis</p>
                </div>
                <div className="order-last flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Mise en place du projet</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Création du design (logo, charte graphique)</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Elaboration des fonctionnalitées clés</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Phase de développement du site</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Création d'un back office</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Optimisation du SEO (référencement)</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Maintenance offerte pendant 6 mois</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Client satisfait</span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-gray-900 bg-white hover:bg-gray-800 disabled: bg-white hover:bg-red-400 disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 w-full flex justify-center items-center">
                    <span className="">Demander un devis</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl ring-1 bg-[#18181B] ring-gray-800 shadow  relative flex flex-col self-stretch w-full">
              <div className="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10">
                <div className="">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl text-white sm:text-3xl font-semibold truncate">Projet sur mesure</p>
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 mt-2 text-left">Accompagnement pour définir votre projet sur mesure.
                  </div>
                </div>
                <div className="flex flex-row items-baseline gap-x-1">
                  <p className="text-white text-2xl sm:text-4xl font-semibold">Sur devis</p>
                </div>
                <div className="order-last flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Mise en place du projet</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Création du design (logo, charte graphique)</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Elaboration des fonctionnalitées selon vos besoins</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Phase de développement du site</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Optimisation du SEO (référencement)</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Maintenance offerte pendant 6 mois</span>
                    </li>
                    <li className="flex items-center gap-x-3 min-w-0">
                      <Icon className="w-5 h-5 lg:w-5 lg:h-5" color="white" icon="lets-icons:check-fill" />
                      <span className=" text-gray-400 truncate">Client satisfait</span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button type="button" className="focus:outline-none focus-visible:outline-0 bg-[#27272A] disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-800  text-gray-200 hover:bg-red-400 disabled:bg-gray-50 hover:bg-gray-700/50 disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 w-full flex justify-center items-center">
                    <span className="">Demander un devis</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}