import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

function LinearLoading(props: any): JSX.Element | null {
    const { classes, loading } = props;

    return (
      loading === 'true' ? <LinearProgress data-testid="loading" {...props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/> : null
    );
}

const styles = props => ({
    colorPrimary: {
      backgroundColor: '#FFFFFF',
    },
    barColorPrimary: {
      backgroundColor: '#1ED65F',
    }
  });

export default withStyles(styles)(LinearLoading);