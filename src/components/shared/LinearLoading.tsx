import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

type LoadingProps = { 
  classes: {
    colorPrimary: string,
    barColorPrimary: string
  },
  loading: string
}

const LinearLoading: React.FC<LoadingProps> = (props: LoadingProps) => {
    const { classes, loading } = props;

    return (
      loading === 'true' ? <LinearProgress data-testid="loading" {...props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/> : null
    );
}

const styles = () => ({
    colorPrimary: {
      backgroundColor: '#FFFFFF',
    },
    barColorPrimary: {
      backgroundColor: '#1ED65F',
    }
  });

export default withStyles(styles)(LinearLoading);