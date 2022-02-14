import NavBar from "../navigation/NavBar";

interface PageWrapperProps {
  navBarPosition?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  return (
    <>
      <NavBar navBarPosition={props.navBarPosition} />
      {props.children}
    </>
  );
};

export default PageWrapper;
