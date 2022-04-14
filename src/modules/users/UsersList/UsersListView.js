import Button from "@mui/material/Button";
import PageHeader from "_common/components/PageHeader";

const UsersListView = () => {
  const newButton = <Button>New</Button>;
  
  return (
    <>
      <PageHeader title="Users" actionButton={newButton} />
    </>
  );
};

export default UsersListView;
