interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
export const NAV_ITEMS: Array<NavItem> = [
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
];
