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
    DEMO = "Get started",
}

export const navLinks: NavLinkType[] = [
    {
        label: "Features", targetId: NAV_MENU_ITEMS.FEATURES, variant: LINK_VARIANT_ENUM.GHOST,
        className: "text-primary-950 hover:text-primary-600"
    },
    {
        label: "Testimonials", targetId: NAV_MENU_ITEMS.TESTIMONIALS, variant: LINK_VARIANT_ENUM.GHOST,
        className: "text-primary-950 hover:text-primary-600"
    },
    {
        label: "Pricing", targetId: NAV_MENU_ITEMS.PRICING, variant: LINK_VARIANT_ENUM.GHOST,
        className: "text-primary-950 hover:text-primary-600"
    },
    {
        label: "Get started", targetId: NAV_MENU_ITEMS.DEMO, variant: LINK_VARIANT_ENUM.DEFAULT,
        className: "text-primary bg-secondary-500 border-secondary-500 hover:bg-secondary-600 hover-border-secondary-600 px-8 py-4.5"
    },
];