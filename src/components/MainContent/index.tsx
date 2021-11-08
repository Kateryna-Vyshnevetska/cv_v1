import useStyles from './useStyles';
import Grid from '../Unknown/Grid';
import ProSkills from '../ProSkills'
import WorkExp from '../WorkExp'
import BasicRating from '../Unknown/BasicRating';
import Hobbies from '../Hobbies';
import FollowMe from '../FollowMe';

interface MainContentProps {
  items?: Array<object>;  
}

const MainContent: React.FC<MainContentProps> = (props) => {
  const classes = useStyles();
  const { items } = props;

  return (
      <Grid container>
        <Grid item md={5} sx={{backgroundColor: "#f0f0f0"}}>
        <ProSkills />
        <BasicRating items={items} />
        <Hobbies />
        <FollowMe />
      </Grid>
        <Grid item md={7} >
          <WorkExp/>
        </Grid>
      </Grid>
  )
}

MainContent.defaultProps = {
  items: [
    {
      name: 'Team work',
      value: 4,
    },
    {
      name: 'Communication',
      value: 4,
    },
    {
      name: 'Creative',
      value: 4,
    },
    {
      name: 'Organisation',
      value: 4,
    },
    {
      name: 'Mangement',
      value: 4,
    },
  ],
}

export default MainContent;