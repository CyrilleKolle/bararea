import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

interface NavButtonProps {
  href?: string;
  isMenuOpen?: boolean;
  hrefText: string;
  checkRouter?: boolean;
}

export const NavButton = (props: NavButtonProps) => {
  const [isMenuClosed, setMenuClosed] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };
  return (
    <NextLink href={props.href} passHref>
      <Box
        as="button"
        height="32px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="2px"
        px="8px"
        borderRadius="4px"
        fontSize="14px"
        fontWeight={router.pathname === props.href ? "bold" : "semibold"}
        backgroundColor={router.pathname === props.href && "teal.400"}
        borderColor={router.pathname === props.href ? "teal.400" : "gray.800"}
        color={router.pathname === props.href ? "gray.100" : "gray.800"}
        _hover={{
          textDecoration: "underline",
          bg: "gray.200",
          color: "gray.900",
        }}
        _active={{
          bg: "teal.200",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        onClick={handleClick}
        display={{ base: "none", md: "inline-block" }}
        disabled={router.pathname === props.href}
      >
        <Link _hover={{ textDecoration: "none" }}>{props.hrefText}</Link>
      </Box>
    </NextLink>
  );
};
