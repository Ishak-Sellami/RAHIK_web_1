import type { ComponentType, SVGProps } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";

export type SocialLink = {
  key: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Placeholder links — real destinations are added later. */
export const SOCIAL_LINKS: SocialLink[] = [
  { key: "contact.instagram", href: "#instagram", Icon: FaInstagram },
  { key: "contact.tiktok", href: "#tiktok", Icon: FaTiktok },
  { key: "contact.facebook", href: "#facebook", Icon: FaFacebookF },
  { key: "contact.telegram", href: "#telegram", Icon: FaTelegramPlane },
  { key: "contact.whatsapp", href: "#whatsapp", Icon: FaWhatsapp },
  { key: "contact.email", href: "#email", Icon: FaRegEnvelope },
];
