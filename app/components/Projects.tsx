import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "QR-Flow – Dynamic AI-Integrated QR Ecosystem",
    description: "A comprehensive MERN-stack platform for generating and managing dynamic QR codes with real-time analytics. Features a custom-built AI Assistant powered by Gemini API to provide instant user support and system guidance. Implemented secure authentication and a sleek, high-contrast dashboard for seamless business asset management.",
    link: "https://shareable-qr.onrender.com/",
    image: "/projects/Shareable-QR-Project-Screenshot.png",
  },
  {
    id: 2,
    title: "Campus Canteen Connect – Real-time Food Management",
    description: "A full-stack digital solution for campus dining, bridging the gap between students and canteen operations. Developed with the MERN stack and Styled Components, the system features live order tracking, digital menu management, and a futuristic 'Glassmorphism' UI. Optimized for high-traffic campus environments with a focus on low-latency state management.",
    link: "https://campus-canteen-rkv.vercel.app/",
    image: "/projects/Canteen-Project-Screenshot.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  {/* Description Card - Final Fix for Overlap */}
                  <div className="relative z-10 mb-6">
                    <div className={`
                      bg-[#111111]/80 backdrop-blur-xl 
                      rounded-2xl p-6 lg:p-8 
                      border border-white/10 shadow-2xl
                      /* Force width to be smaller so it doesn't cover the whole image */
                      w-full lg:max-w-[110%]
                      ${isEven 
                        ? "lg:mr-auto lg:-translate-x-16" 
                        : "lg:ml-auto lg:translate-x-16"
                      }
                    `}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""} flex justify-end`}>
                  {/* Added max-w-lg to prevent it from stretching too wide and justify-end to keep it away from the text */}
                  <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl border border-white/10">
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        /* object-contain ensures the whole screenshot fits without being cropped */
                        className="object-contain transition-transform duration-500 hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

