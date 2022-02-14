import { Flex, Text, Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const HeaderMarquee = () => {
  return (
    <Flex display={{ base: "none", md: "block" }} flex={1} rounded="md">
      <Box
        p="6"
        rounded="xl"
        justifyContent="center"
        alignContent="center"
        justifyItems="center"
        backgroundPosition="center"
        display="flex"
        flexWrap="wrap"
        textAlign="center"
        border={1}
        borderColor="gray.500"
      >
        <Marquee pauseOnHover={true} gradient={false}>
          <Text fontWeight={500} marginX="auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            nesciunt odio cum atque expedita alias, accusamus eveniet sequi
            magni voluptatibus corporis quibusdam sapiente minima, iure amet ab
            porro in molestias.
          </Text>
        </Marquee>
      </Box>
    </Flex>
  );
};

export default HeaderMarquee;
