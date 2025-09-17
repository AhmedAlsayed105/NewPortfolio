import CountUp from "react-countup";

export default function Status() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12 ">
      <div className="flex-gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={2} duration={5} delay={2} className="block w-[40px]" />
          <div>+</div>
        </div>
        <span>
          Years <br /> experience
        </span>
      </div>
      <div className="flex-gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={1} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          client <br /> worldwide
        </span>
      </div>
    </div>
  );
}
