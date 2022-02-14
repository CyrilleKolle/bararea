import {
  Stack,
  useColorModeValue,
  Link,
  Box,
  Divider,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { MOBILE_NAV_ITEMS } from "./MobileNavItems";

import MobileNavItem from "./MobileNavItem";
import { PreferencesContent } from "../components/PreferencesContent";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const MobileNav = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      mx={2}
      mt={2}
      borderRadius={8}
    >
      {MOBILE_NAV_ITEMS.map((navItem) =>
        navItem.label !== "Preferences" ? (
          <>
            <Divider orientation="horizontal" />
            <MobileNavItem key={navItem.label} {...navItem} />
          </>
        ) : (
          <Box key={navItem.label} onClick={() => setFilterOpen(!isFilterOpen)}>
            <Flex justify={"space-between"} align={"center"}>
              <Link
                // href={navItem.href ?? "#"}
                _hover={{
                  textDecoration: "red.100",
                  color: "teal.100",
                }}
                fontWeight={!isFilterOpen ? 100 : 400}
                fontSize={"md"}
                color={useColorModeValue("gray.600", "gray.200")}
              >
                {navItem.label}
              </Link>
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isFilterOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            </Flex>
            <PreferencesContent isFilterOpen={isFilterOpen} />
          </Box>
        )
      )}
    </Stack>
  );
};
export default MobileNav;
