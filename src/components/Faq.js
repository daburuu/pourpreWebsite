export default function Faq() {
  return (
    <div className="py-24 sm:py-32 scroll-mt-[var(--header-height)]" id="faq">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Questions fréquemment posées</h2>
          <div className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">Voici des exemples des questions les plus récurrentes.</div>
        </div>
        <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800 -mt-6 max-w-4xl mx-auto">
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="true">
              <span className="text-gray-900 dark:text-white font-semibold">Quelle est votre approche pour créer un site web sur mesure ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-1" className="text-base text-gray-500 dark:text-gray-400 py-6">Notre approche est centrée sur vos besoins spécifiques. Nous commençons par une phase de découverte pour comprendre vos objectifs, suivie de la conception et du développement. Nous effectuons ensuite des tests rigoureux avant la mise en ligne pour garantir que le site répond à vos attentes.</div>
            </div>
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false">
              <span className="text-gray-900 dark:text-white font-semibold">Quels types de services proposez-vous ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-3" className="text-base text-gray-500 dark:text-gray-400 py-6">Nous offrons une gamme complète de services incluant l'audit de sites web, la création d'e-commerce, de landing pages et de sites web sur mesure. Nous vous accompagnons de A à Z pour répondre à vos besoins spécifiques.</div>
            </div>
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800" >
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false">
              <span className="text-gray-900 dark:text-white font-semibold">Combien de temps faut-il pour créer un site web ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-5" className="text-base text-gray-500 dark:text-gray-400 py-6">La durée de création d'un site web dépend de la complexité du projet. En général, un site e-commerce ou une landing page peut prendre de 2 à 4 semaines, tandis qu'un site sur mesure peut prendre de 4 à 8 semaines..</div>
            </div>
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false">
              <span className="text-gray-900 dark:text-white font-semibold">Proposez-vous des audits de sites web existants ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-7" className="text-base text-gray-500 dark:text-gray-400 py-6">Oui, nous réalisons des audits complets de sites web existants pour identifier les points à améliorer en termes de performance, de SEO, de design et d'expérience utilisateur.</div>
            </div>
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false">
              <span className="text-gray-900 dark:text-white font-semibold">Quels sont les coûts associés à vos services ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-9" className="text-base text-gray-500 dark:text-gray-400 py-6">Les coûts varient en fonction de la complexité et des exigences du projet. Nous proposons des devis personnalisés après une première consultation gratuite pour comprendre vos besoins et objectifs.</div>
            </div>
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <button type="button" className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none gap-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hover:no-underline inline-flex items-center text-left text-lg py-6 w-full" aria-expanded="false">
              <span className="text-gray-900 dark:text-white font-semibold">Offrez-vous des services de maintenance pour les sites web ?</span>
              <span className="iconify i-heroicons:chevron-down-20-solid ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-6 h-6 -rotate-90" aria-hidden="true" ></span>
            </button>
            <div>
              <div id="headlessui-disclosure-panel-nSZ7s8siktv-11" className="text-base text-gray-500 dark:text-gray-400 py-6">Oui, nous offrons des services de maintenance de 6 mois pour assurer que votre site reste à jour, sécurisé et performant. Nos plans de maintenance incluent des mises à jour régulières, des sauvegardes et un support technique.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}