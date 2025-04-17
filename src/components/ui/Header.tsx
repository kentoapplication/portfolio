import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

type MenuProps = {
  title: string;
  href: string;
};

export const Header: React.FC = () => {
  const menu: MenuProps[] = [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "ABOUT ME",
      href: "/me",
    },
    {
      title: "PORTFOLIO",
      href: "/portfolio",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ];

  const MenuLink: React.FC<MenuProps> = ({ title, href }) => {
    return (
      <Link href={href}>
        <Text>{title}</Text>
      </Link>
    );
  };

  return (
    <HStack>
      <Text>Kento Tsutsui</Text>
      {menu.map((item) => (
        <MenuLink key={item.title} {...item}></MenuLink>
      ))}
    </HStack>
  );
};
