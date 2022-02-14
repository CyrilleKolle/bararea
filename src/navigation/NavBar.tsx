import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HeaderMarquee from "../components/HeaderMarquee";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NavButton } from "../components/NavButton";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "./DesktopNavItems";

interface NavBarProps {
  navBarPosition?: boolean;
}

const WithSubnavigation = (props: NavBarProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMenuOpen, setMenuClosed] = useState(false);
  const [isRoute, setRoute] = useState(false);
  const router = useRouter();

  return (
    <Box
      as="header"
      position={props.navBarPosition === true ? "absolute" : "relative"}
      width="100%"
      flex={1}
      zIndex={1}
    >
      <Flex
        bg={isMenuOpen ? "gray.200" : "rgba(255,255,255,0.0)"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        flex={1}
        paddingX={50}
        paddingY={5}
      >
        <HStack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={10}
          minWidth={"100%"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
          <HeaderMarquee />

          <NavButton hrefText="Home" href="/" />
          <NavButton hrefText="Explore" href="/explore" />
          <Box
            as="button"
            height="32px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="2px"
            px="8px"
            borderRadius="4px"
            fontSize="14px"
            fontWeight={isMenuOpen ? "extrabold" : "semibold"}
            backgroundColor={isMenuOpen && "teal.400"}
            borderColor={!isMenuOpen ? "gray.800" : "teal.400"}
            color={!isMenuOpen ? "gray.800" : "gray.100"}
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
            onClick={() => setMenuClosed(!isMenuOpen)}
            display={{ base: "none", md: "inline-block" }}
          >
            Filter
          </Box>
          <IconButton
            display={{ md: "none" }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            backgroundColor={"gray.200"}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </HStack>
      </Flex>
      <Collapse in={isMenuOpen} animateOpacity>
        <Flex
          bg={useColorModeValue("gray.200", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            minWidth="100%"
          >
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
      </Collapse>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
export default WithSubnavigation;
