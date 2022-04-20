import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import useStyles from "./SidebarStyle";

const SidebarView = ({ sidebarOpen }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: sidebarOpen,
          [classes.drawerClose]: !sidebarOpen
        })
      }}>
      <>Menu</>
    </Drawer>
  );
};

export default SidebarView;
