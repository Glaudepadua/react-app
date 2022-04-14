import PageHeaderView from "./PageHeaderView";

const PageHeader = ({ title, actionButton }) => {
  return <PageHeaderView {...{ title, actionButton }} />;
};

export default PageHeader;
