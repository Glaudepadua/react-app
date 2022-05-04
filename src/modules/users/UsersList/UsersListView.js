import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import UsersListFilter from "./UsersListFilter";
import UsersListTable from "./UsersListTable";

const UsersListView = () => {
  const newButton = <Button>New</Button>;
  
  return (
    <>
      <PageHeader title="Users" actionButton={newButton} />
      <UsersListFilter />
      <UsersListTable />
    </>
  );
};

export default UsersListView;
