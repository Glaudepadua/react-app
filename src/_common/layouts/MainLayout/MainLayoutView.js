import Header from "./Header";
import useStyles from "./MainLayoutStyle";
import Sidebar from "./Sidebar";

const MainLayoutView = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default MainLayoutView;
