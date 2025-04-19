import { NavLinkType } from "./Layout.types";

export const ProjectName = "Data Pulse";

export const FooterConstants = {
    shortDescription: "Making data communication simple and effective for development teams worldwide.",
}

export enum LINK_VARIANT_ENUM {
  GHOST = "ghost",
  OUTLINE = "outline",
  DEFAULT = "default",
  LINK = "link",
  DESTRUCTIVE = "destructive",
  SECONDARY = "secondary",
}

export enum NAV_MENU_ITEMS {
    FEATURES = "features",
    TESTIMONIALS = "testimonials",
    PRICING = "pricing",
    LOGIN = "Log in",
    DEMO = "Get started",
}

export const navLinks: NavLinkType[] = [
    { label: "Features", targetId: NAV_MENU_ITEMS.FEATURES, variant: LINK_VARIANT_ENUM.GHOST },
    { label: "Testimonials", targetId: NAV_MENU_ITEMS.TESTIMONIALS, variant: LINK_VARIANT_ENUM.GHOST },
    { label: "Pricing", targetId: NAV_MENU_ITEMS.PRICING, variant: LINK_VARIANT_ENUM.GHOST },
    { label: "Log in", targetId: NAV_MENU_ITEMS.LOGIN, variant: LINK_VARIANT_ENUM.OUTLINE },
    { label: "Get started", targetId: NAV_MENU_ITEMS.DEMO, variant: LINK_VARIANT_ENUM.DEFAULT },
];