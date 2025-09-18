import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiBootstrapFill,
  RiTailwindCssFill,
  RiGithubFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TypeSkills } from "@/app/Types/types";
const Skillks: TypeSkills = [
  {
    Icon: RiHtml5Fill,
    name: "Html 5",
  },
  {
    Icon: RiCss3Fill,
    name: "Css 3",
  },
  {
    Icon: RiJavascriptFill,
    name: "JavaScript",
  },
  {
    Icon: RiBootstrapFill,
    name: "Bootstrap",
  },
  {
    Icon: RiTailwindCssFill,
    name: "Tailwind",
  },
  {
    Icon: RiGithubFill,
    name: "GitHub",
  },
  {
    Icon: RiReactjsFill,
    name: "React.js",
  },
  {
    Icon: RiNextjsFill,
    name: "Next.js",
  },
];
export default function Skills() {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skilks</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {Skillks.map((skill, idx) => {
          const { Icon, name } = skill;
          return (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-1/6 rounded-full flex justify-center items-center bg-tertiary/70 group">
                  <Icon className=" text-3xl cursor-pointer hover:text-accent transition-all duration-300" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xl">{name}</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}
