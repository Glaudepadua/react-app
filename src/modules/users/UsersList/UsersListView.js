import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import UserDialog from "./UserDialog";
import UsersListFilter from "./UsersListFilter";
import UsersListTable from "./UsersListTable";

const UsersListView = ({ userDialog, handleOpenUserDialog }) => {
  const newButton = <Button onClick={handleOpenUserDialog}>New</Button>;

  return (
    <>
      <PageHeader title="Users" actionButton={newButton} />
      <UsersListFilter />
      <UsersListTable />
      {userDialog.open && <UserDialog />}
    </>
  );
};

export default UsersListView;
