import { useState } from "react";
import MenuItemView from "./MenuItemView";

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return <MenuItemView {...{ item, open, handleClick }} />;
};

export default MenuItem;
