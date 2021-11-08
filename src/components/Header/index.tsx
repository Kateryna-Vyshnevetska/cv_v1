import { Typography } from '@material-ui/core';
import myPhoto from '../../assets/b.jpg'
import Grid from '../Unknown/Grid';
import useStyles from './useStyles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
      <Grid container spacing={4}>
        <Grid item md={5}>
          <img className={classes.myPhoto} src={myPhoto} alt="My photo" />
        </Grid>
        <Grid item md={7} className={classes.description}>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur saepe eos asperiorre consequuntur nihil illum!</Typography>
        </Grid>
      </Grid>
    
  )
}

export default Header;