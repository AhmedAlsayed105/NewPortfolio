import { IpropSocials, Socilas } from "@/app/Types/types";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const socials: Socilas = [
  {
    Icon: BiLogoFacebook,
    to: "https://www.facebook.com/profile.php?id=100089962726865&mibextid=ZbWKwL",
  },
  {
    Icon: BiLogoLinkedin,
    to: "https://www.linkedin.com/in/ahmed-alsayed-issa/",
  },
  {
    Icon: BiLogoGithub,
    to: "https://github.com/AhmedAlsayed105",
  },
];

export default function Socials({ containerStyle, iconStyle }: IpropSocials) {
  return (
    <div className={containerStyle}>
      {socials.map(({ Icon, to }, idx) => {
        return (
          <div key={idx}>
            <Link href={to}>
              <Icon className={iconStyle} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
