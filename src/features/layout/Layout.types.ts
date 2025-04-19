import { LINK_VARIANT_ENUM, NAV_MENU_ITEMS } from "./LayoutConstants";

export type NavLinkType = {
    label: string;
    targetId: NAV_MENU_ITEMS;
    variant: LINK_VARIANT_ENUM;
};

export type NavLinkVariant = LINK_VARIANT_ENUM;
