import {
  Flex,
  useColorMode,
  Box,
  useColorModeValue,
  Stack,
  Text,
  useBreakpointValue,
  Collapse,
  Center,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { Categories_list, Colors_list } from "./layouts/menu_lists/menu_lists";

interface FilterContentProps {
  categories?: string;
  color?: string;
  discountRate?: number;
  isFilterOpen: boolean;
}

export const PreferencesContent = (props: FilterContentProps) => {
  return (
    <Box flex={1} flexGrow={1} marginY={10} width="100%" minW="100%">
      <Collapse in={props.isFilterOpen} animateOpacity>
        <Grid
          minW="100%"
          width="100%"
          flex={1}
          flexGrow={1}
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={2}
          justifyContent="center"
          height="fit-content"
        >
          <Box w="100%" minW="520px">
            <Select
              placeholder="Category"
              minW="100%"
              width="100%"
              borderWidth="1px"
              borderColor="gray.400"
            >
              {Categories_list.map((item, index) => (
                <option value="option1" key={index}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box minW="520px">
            <Select
              placeholder="Colors"
              minW="100%"
              width="100%"
              borderWidth="1px"
              borderColor="gray.400"
            >
              {Colors_list.map((item, index) => (
                <>
                  <option key={index} value="option1">
                    {item.label}
                  </option>
                  <Divider height="1px" bg="teal.gray" />
                </>
              ))}
            </Select>
          </Box>
          <Flex
            minW="520px"
            borderWidth="1px"
            borderColor="gray.400"
            paddingX="18px"
            paddingY="12px"
            borderRadius="8px"
            direction="column"
          >
            <Text paddingBottom="10px">Price Range</Text>
            <RangeSlider aria-label={["min", "max"]} defaultValue={[30, 80]}>
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="tomato" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color="tomato" placeholder={"10"} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color="tomato" placeholder="80" />
              </RangeSliderThumb>
            </RangeSlider>
          </Flex>
          <Box
            minW="520px"
            borderWidth="1px"
            borderColor="gray.400"
            padding="22px"
            borderRadius="8px"
          >
            <Text
              textAlign="center"
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              minW="100%"
            >
              Logo
            </Text>
          </Box>
        </Grid>
      </Collapse>
    </Box>
  );
};
