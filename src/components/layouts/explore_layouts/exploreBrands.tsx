import { Box, Text, Center, Image, Flex } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

interface ExploreBrandsProps {
  image?: string;
  label?: string;
  href?: string;
  data?: Array<string>;
}

const ExploreBrands = (props: ExploreBrandsProps) => {
  const [isHovered, toggleHovered] = useState(false);

  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      rounded="sm"
      m="10px"
      width="300px"
      overflow={"hidden"}
      backgroundImage={props.image}
      height="400px"
      backgroundColor="red.100"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      boxShadow="xl"
      shadow="xl"
      onMouseOver={() => toggleHovered(!isHovered)}
      onMouseLeave={() => toggleHovered(!isHovered)}

    >
      <Box height="400px" width="300px" boxShadow="xl">
        <Text
          color="gray.900"
          fontWeight={200}
          fontSize="2xl"
          bottom={4}
          right={100}
          mx="auto"
          position="absolute"
          backgroundColor="gray.100"
          px="10px"
          rounded="5px"
          minW="120px"
          minH="42px"
          textShadow="1px 1px #008080"
          borderWidth="2px"
          borderColor="teal.400"
        >
          {isHovered ? "See me" : props.label}
        </Text>
      </Box>
    </Box>
  );
};
export default ExploreBrands;
