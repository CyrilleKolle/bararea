import {
  Box,
  Text,
  Flex,
  Stat,
  StatNumber,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";

interface ExploreBrandsProps {
  image?: string;
  label?: string;
  href?: string;
  data?: Array<string>;
  numberOfClicks?: number;
}

const ExploreBrands = (props: ExploreBrandsProps) => {
  const [isHovered, toggleHovered] = useState(false);

  return (
    <Flex
      width="300px"
      flexDirection="column"
      as="button"
      borderWidth={1}
      height="auto"
      my={2}
      rounded="sm"
    >
      <Box
        width="full"
        overflow={"hidden"}
        backgroundImage={props.image}
        height="400px"
        backgroundSize="cover"
        backgroundPosition="center"
        boxShadow="xl"
        shadow="xl"
        onMouseOver={() => toggleHovered(!isHovered)}
        onMouseLeave={() => toggleHovered(!isHovered)}
      >
        {props.numberOfClicks > 100 && (
          <Badge variant="solid" colorScheme="red" py={1} mt={1}>
            Hot today
          </Badge>
        )}
      </Box>
      <Spacer />
      <Flex width="full" px={2} height="auto" py={3}>
        <Box py="auto" my="auto">
          <Text color="gray.900" fontWeight={500} fontSize="2xl" px="10px">
            {props.label}
          </Text>
        </Box>
        <Spacer />
        <Box>
          {props.numberOfClicks > 1 && (
            <Stat>
              <Badge variant="subtle" colorScheme="green">
                Visited
              </Badge>
              <StatNumber fontSize="sm">{props.numberOfClicks}</StatNumber>
            </Stat>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
export default ExploreBrands;
