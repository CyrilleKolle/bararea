import {
  Box,
  Text,
  Center,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid,
} from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import ProductAddToCart from "../components/layouts/explore_layouts/CompanyCard";
import ExploreBrands from "../components/layouts/explore_layouts/exploreBrands";
import { useState } from "react";

const Explore = () => {
  return (
    <PageWrapper >
      <Center>
        <SimpleGrid spacing="40px" columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
          <ExploreBrands
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo4DsoyJz9-iBEM-soA6j07lVgP4LbQM3fA&usqp=CAU"
            label="h/m"
          />
        </SimpleGrid>
      </Center>
    </PageWrapper>
  );
};
export default Explore;
