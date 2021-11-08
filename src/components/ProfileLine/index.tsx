import { Typography } from '@material-ui/core';
import Container from '../Unknown/Container';
import Grid from '../Unknown/Grid';
import useStyles from './useStyles';

interface ProfileLineProps {
  name?: string;
  surname?: string;
  profession?: string;
  number?: string;
  email?: string;
  city?: string;
  country?: string;
}


const ProfileLine: React.FC<ProfileLineProps> = (props) => {
  const classes = useStyles();
  const { name, surname, profession, number, email, city, country } = props;
  
  return (
    <>
        <Grid className={classes.container } container >
          <Grid className={classes.itemLeft} item md={8} sx={{
            color: 'white',
            background: 'linear-gradient(to right, #d75a31, #cf846b, #c99a67, #729aa3, #5ba99d)',
          }}>
            <Grid style={{ textAlign: 'center' }}>
              <Typography variant='h1'>{name}
                <Typography style={{display:'inline'} } variant='h2'>{surname}</Typography>
              </Typography>
              <Typography variant='h4'>{profession}</Typography>
            </Grid>
            <Grid className={classes.secondItemRight } direction="column">
              <Typography variant='body2'>{number}</Typography>
              <Typography variant='body2'>{email}</Typography>
            </Grid>
          </Grid>
          <Grid md={1}></Grid>
          <Grid item md={3} className={classes.itemRight} direction="column" style={{ paddingRight: '50px', height: '139px', justifyContent: 'center' }}
          sx={{
            color: '#666666',
            background: 'linear-gradient(to right, #adb1b8, #e7e7e7, #efefef, #f3f3f3)',
          }}>
            <Typography variant='subtitle2'>{city}, {country}</Typography>
          </Grid>
        </Grid>
      </>
  )
}

ProfileLine.defaultProps = {
  name: "Kateryna ",
  surname: "Kopchuk",
  profession: "Full Stack Developer",
  number: "+38 (097) 113 32 47",
  email: "kopchuk.kateryna@gmail.com",
  city: 'Kyiv',
  country: 'Ukraine'
}


export default ProfileLine;