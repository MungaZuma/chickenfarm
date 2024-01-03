import {
  Squares2X2Icon,
  UserGroupIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";



const menuItems = [
  {
    title: "Sections",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <Squares2X2Icon className="h-5 w-5" />,
        active: true,
      },
      {
        title: "Flock",
        path: "/flock",
        icon: <UserGroupIcon className="h-5 w-5" />,
      },
      {
        title: "Feed",
        path: "/feed",
        icon: <ShoppingCartIcon className="h-5 w-5" />,
      },
      {
        title: "Sales",
        path: "/sales",
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: <ChartBarIcon className="h-5 w-5" />,
      },
    ],
  },
];

export default menuItems;
