import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./PageHeaderStyle";

const PageHeaderView = ({ title, actionButton }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justifyContent={"space-between"}>
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      {actionButton && <Grid item>{actionButton}</Grid>}
    </Grid>
  );
};

export default PageHeaderView;
