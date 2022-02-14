interface MobNavItem {
  label: string;
  subLabel?: string;
  children?: Array<MobNavItem>;
  href?: string;
}
export const MOBILE_NAV_ITEMS: Array<MobNavItem> = [
  {
    label: "Preferences",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Saved For Later",
    children: [
      {
        label: "Jack and Jones socks",
        subLabel: "100kr",
        href: "#",
      },
      {
        label: "Ikea Bedsheets",
        subLabel: "800kr",
        href: "#",
      },
    ],
  },
  {
    label: "Explore",
    children: [
      {
        label: "explore",
        href: "/explore",
      },
    ],
  },
  {
    label: "Home",
    children: [
      {
        label: "home",
        href: "/",
      },
    ],
  },
];
