import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "AI Mini Agents Virtual Intern — North-Chiang Mai University",
    description: "Designed and engineered autonomous AI mini-agents utilizing prompt engineering and machine learning workflows. Deployed multi-agent architectures to automate complex, real-world tasks within a structured international academic ecosystem.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Research Intern — SRM University, AP",
    description: "Spearheaded comprehensive research on digital banking adoption frameworks, deep-diving into UPI security and fintech vulnerabilities. Analyzed the application of AI, Blockchain, and Cloud architectures to mitigate transaction-level fraud.",
    icon: "/cards/card-3.png", 
  }
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

