import Header from "./Header";

const MainLayoutView = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayoutView;
