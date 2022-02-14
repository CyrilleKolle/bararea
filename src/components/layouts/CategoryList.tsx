import {
  Text,
  Center,
  SimpleGrid,
  Box,
  chakra,
  AspectRatio,
} from "@chakra-ui/react";
import ExploreBrands from "./explore_layouts/exploreBrands";

const CategoryList = () => {
  return (
    <Box backgroundImage="https://media.istockphoto.com/videos/mother-and-daughter-running-to-the-sun-video-id497375361">
      <Center>
        <SimpleGrid spacing="40px" columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx__czpUfJ31GGTO7TY7GYuuh4L39wKMDfzA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXHAdECCUJjyj-GOLB9dnHlCmFkstbOgLWA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzfd4UBCMR7sDemaAkvJlbzapLobNO9Kzeg&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8lWILRbD-KQXwCjw-L3qwBLry6bNPDLUI2B_QocAn5BoNUR7_1HuMQs55Gf5LJyeiYs&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpdQm0FehrgxOYEuY6M2VNkRVqvmB3BPgdMbU4hQcLjqKV1UDpAALVMxTQXFq0jAuPjk&usqp=CAU"
            label="h/m"
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};
export default CategoryList;
