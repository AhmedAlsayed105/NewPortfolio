import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="text-[28px] font-normal">
      <Image width={50} height={50} alt="Logo" src="/assets/loggo (2).png" />
    </Link>
  );
}
