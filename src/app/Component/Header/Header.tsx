import NavMobile from "../NavBar/NavMobile";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-4 right-0 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          {/* start nav bar mobil  */}
          <NavMobile />
        </div>
        {/* end nav bar mobil  */}
      </div>
    </header>
  );
}
