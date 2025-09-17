import { TypeJourney } from "@/app/Types/types";

const journeys: TypeJourney = [
  {
    years: "2023 - 2025",
    role: "Web Developr",
    institution: "Elzero & Udemy",
  },
  {
    years: "2019 - 2023",
    role: "Bachelor of Education",
    institution: "Suez University",
  },
];

export default function Journey() {
  return (
    <div className="flex flex-col ">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {/*  */}
      {journeys.map((journey, idx) => {
        const { institution, role, years } = journey;
        return (
          <div key={idx} className="flex items-center gap-12 w-full">
            {/*bolliets  */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full "></div>
              <div className="w-1 h-[180px] bg-white/10"></div>
            </div>
            {/*  */}
            <div className="max-w[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <p className="h4 mb-2">{role}</p>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
