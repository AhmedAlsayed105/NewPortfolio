import { IconType } from "react-icons";
import { Url } from "url";
//
export type PropNavLink = {
  containerStyles: string;
};
export type IpropSocials = {
  containerStyle: string;
  iconStyle: string;
};
//
export type NavItme = {
  name: string;
  path: string;
}[];
export type Socilas = {
  Icon: IconType;
  to: string | Url;
}[];

export type TypeTestimonial = {
  message: string;
  name: string;
}[];

export type TypeJourney = {
  years: string;
  role: string;
  institution: string;
}[];

export type TypeSkills = {
  Icon: IconType;
  name: string;
}[];
