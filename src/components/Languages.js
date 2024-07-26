import { Icon } from '@iconify/react';

export default function Languages({}){

    return (
        <div className="py-24 sm:py32">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-12 flex flex-col text-center">
                <h2 class="text-2xl font-semibold leading-8 text-white">Nous utilisons des technologies modernes</h2>
                <div className="mx-auto flex flex-wrap items-center justify-between gap-8">
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:react" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:nodejs-icon" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:mongodb-icon" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:angular-icon" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:javascript" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:typescript-icon" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:docker-icon" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:vue" />
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:wordpress-icon" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:mysql-icon" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:webflow" /> 
                </div>
                <h2 className="text-2xl font-semibold leading-8 text-white mt-8">Utilisés par les sites les plus visités</h2>
                <div className="mx-auto flex flex-wrap items-center justify-between gap-8">
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:twitch" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:facebook" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:twitter" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:airbnb-icon" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="skill-icons:instagram" /> 
                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-white" icon="logos:paypal" /> 
                </div>
            </div>
        </div>
    );
}
