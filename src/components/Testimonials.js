import { useEffect } from 'react';

export default function Testimonials() {
  useEffect(() => {
    const columns = document.querySelectorAll('.testimonial-column');
    columns.forEach((column) => {
      column.style.animationDelay = '0s';
    });
  }, []);

  const testimonialsData = [
    {
      quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur.",
      name: "Rose Roberson",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=1"
    },
    {
      quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=7"
    },
    {
      quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=3"
    },
    {
      quote: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore.",
      name: "Destinee Woods",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=5"
    },
    {
      quote: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
      name: "Kaleb Mccormick",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=8"
    },
    {
      quote: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt.",
      name: "Jazmin Mccall",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=9"
    },
    {
      quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur.",
      name: "Rose Roberson",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=1"
    },
    {
      quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=7"
    },
    {
      quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=3"
    },
    {
      quote: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore.",
      name: "Destinee Woods",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=5"
    },
    {
      quote: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
      name: "Kaleb Mccormick",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=8"
    },
    {
      quote: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt.",
      name: "Jazmin Mccall",
      position: "CEO at Company",
      image: "https://i.pravatar.cc/120?img=9"
    }
  ];

  const generateTestimonials = (data, colIndex) => {
    return data.map((testimonial, i) => (
      <div key={`${colIndex}-${i}-${testimonial.name}`} className="testimonial-item">
        <div className="rounded-lg shadow bg-[#18181B] relative m-2 fade">
          <div className="flex flex-col sm:p-6 m-2">
            <div>
              <q className="text-gray-600 dark:text-gray-300">{testimonial.quote}</q>
              <div className="flex items-center gap-3 mt-6 relative">
                <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-10 w-10 text-base">
                  <img className="rounded-full h-10 w-10 text-base" alt={testimonial.name} src={testimonial.image} loading="lazy" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const duplicateTestimonials = (data) => {
    return [...data, ...data];
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <div className="mb-2 text-base font-semibold text-red-400">Témoignages</div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Les retours de nos clients comptent beaucoup</h2>
          <div className="mt-6 text-lg text-gray-300 mb-20">Votre avis est primordial pour notre équipe.</div>
        </div>
        <div className="columns-container">
          {[0, 1, 2].map((colIndex) => {
            const testimonials = colIndex === 1 ? duplicateTestimonials(testimonialsData).reverse() : duplicateTestimonials(testimonialsData);
            return (
              <div
                key={colIndex}
                className={`overflow-hidden testimonial-column ${colIndex === 1 ? 'scroll-reverse' : 'scroll'} flex flex-col space-y-1`}
                style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 128px, black calc(100% - 200px), transparent 100%)' }}
              >
                {generateTestimonials(testimonials, colIndex)}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .columns-container {
          display: flex;
          overflow: visible;
          position: relative;
          height: 400px;
        }

        .testimonial-column {
          flex: 1;
          position: relative;
        }

        .testimonial-item {
          flex: none;
          animation: scroll 50s linear infinite;
          overflow: hidden;
        }

        .scroll-reverse .testimonial-item {
          animation: scroll-reverse 50s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

