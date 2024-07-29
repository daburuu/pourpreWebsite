import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Faq() {
  const [openedDrawers, setOpened] = useState({});

  function openDrawer(index){
    const newState = {...openedDrawers};
    if (openedDrawers[index] == true) {
      setOpened({...openedDrawers, [index]: false});
    } else {
      setOpened({...openedDrawers, [index]: true});
    }
  }

  return (
    <div className="py-24 sm:py-32 scroll-mt-[var(--header-height)]" id="faq">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="text-center flex flex-col items-center">
          <div className="mb-2 text-base font-semibold text-red-400">F.A.Q</div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Laissez-nous balayer vos doutes</h2>
        </div>

        <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800 -mt-6 max-w-4xl mx-auto">
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center justify-between text-lg py-6 w-full transition duration-200" onClick={() => openDrawer(0)}>
              <span className="font-semibold">Quelle est votre approche pour créer un site web sur mesure ?</span>
              {!openedDrawers[0] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[0] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className="flex"> 
              <div className={`${openedDrawers[0] ? "max-h-[100%]" : "max-h-0"} overflow-hidden transition-all duration-400 ease-in-out`}>
                <div id="headlessui-disclosure-panel-nSZ7s8siktv-1" className="text-base text-white/80 py-6">Notre approche est centrée sur vos besoins spécifiques. Nous commençons par une phase de découverte pour comprendre vos objectifs, suivie de la conception et du développement. Nous effectuons ensuite des tests rigoureux avant la mise en ligne pour garantir que le site répond à vos attentes.</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false" onClick={() => openDrawer(1)}>
              <span className="text-red-400 font-semibold">Quels types de services proposez-vous ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
              {!openedDrawers[1] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[1] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className={`${openedDrawers[1] ? "max-h-[100%]" : "max-h-0" } overflow-hidden`}>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-3" className="text-base text-white/80 py-6">Nous offrons une gamme complète de services incluant l'audit de sites web, la création d'e-commerce, de landing pages et de sites web sur mesure. Nous vous accompagnons de A à Z pour répondre à vos besoins spécifiques.</div>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800" >
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false" onClick={() => openDrawer(2)}>
              <span className="text-red-400 font-semibold">Combien de temps faut-il pour créer un site web ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
              {!openedDrawers[2] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[2] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className={`${openedDrawers[2] ? "max-h-[100%]" : "max-h-0" } overflow-hidden`}>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-5" className="text-base text-white/80 py-6">La durée de création d'un site web dépend de la complexité du projet. En général, un site e-commerce ou une landing page peut prendre de 2 à 4 semaines, tandis qu'un site sur mesure peut prendre de 4 à 8 semaines..</div>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false" onClick={() => openDrawer(3)}>
              <span className="text-red-400 font-semibold">Proposez-vous des audits de sites web existants ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
              {!openedDrawers[3] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[3] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className={`${openedDrawers[3] ? "max-h-[100%]" : "max-h-0" } overflow-hidden`}>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-7" className="text-base text-white/80 py-6">Oui, nous réalisons des audits complets de sites web existants pour identifier les points à améliorer en termes de performance, de SEO, de design et d'expérience utilisateur.</div>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false" onClick={() => openDrawer(4)}>
              <span className="text-red-400 font-semibold">Quels sont les coûts associés à vos services ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
              {!openedDrawers[4] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[4] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className={`${openedDrawers[4] ? "max-h-[100%]" : "max-h-0" } overflow-hidden`}>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-9" className="text-base text-white/80 py-6">Les coûts varient en fonction de la complexité et des exigences du projet. Nous proposons des devis personnalisés après une première consultation gratuite pour comprendre vos besoins et objectifs.</div>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-red-400 hover:text-red-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false" onClick={() => openDrawer(5)}>
              <span className="text-red-400 font-semibold">Offrez-vous des services de maintenance pour les sites web ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
              {!openedDrawers[5] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
              {openedDrawers[5] &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }
            </button>
            <div className={`${openedDrawers[5] ? "max-h-[100%]" : "max-h-0" } overflow-hidden`}>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-11" className="text-base text-white/80 py-6">Oui, nous offrons des services de maintenance de 6 mois pour assurer que votre site reste à jour, sécurisé et performant. Nos plans de maintenance incluent des mises à jour régulières, des sauvegardes et un support technique.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}