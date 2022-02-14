import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { PreferencesContent } from "../components/PreferencesContent";
import { useState } from "react";
import { NAV_ITEMS } from "./DesktopNavItems";
import DesktopSubNav from "./DesktopSubNav";
import { useRouter } from "next/router";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const isActive =
    router.pathname === "/Saved For Later" ||
    router.pathname === "/Preferences";

  return (
    <Box >
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            {navItem.label !== "Preferences" ? (
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: "teal.400",
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            ) : (
              <>
                <Box key={navItem.label}>
                  <Link
                    fontWeight={500}
                    p={2}
                    // href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    _active={{ fontFamily: 500 }}
                    color={!isFilterOpen ? linkColor : "teal.400"}
                    _hover={{
                      textDecoration: "none",
                      color: "teal.400",
                    }}
                    _activeLink={{
                      color: "red",
                    }}
                    onClick={() => setFilterOpen(!isFilterOpen)}
                  >
                    {navItem.label}
                  </Link>
                </Box>
              </>
            )}
          </Box>
        ))}
      </Stack>
      <PreferencesContent isFilterOpen={isFilterOpen} />
    </Box>
  );
};
export default DesktopNav;
