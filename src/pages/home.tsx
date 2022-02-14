import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import CategoryList from "../components/layouts/CategoryList";
import Footer from "../components/layouts/footer/Footer";
interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <PageWrapper navBarPosition={true}>
      <Hero />
      <CategoryList />
      <Footer />
    </PageWrapper>
  );
};
export default Home;
