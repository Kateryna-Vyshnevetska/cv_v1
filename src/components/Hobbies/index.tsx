import useStyles from './useStyles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '../Unknown/Typography';
import StraightenIcon from '@mui/icons-material/Straighten';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import FastfoodIcon from '@mui/icons-material/Fastfood';

interface HobbiesProps {
  items?: Array<object>;
  descr?: string;
}

const Hobbies: React.FC<HobbiesProps> = (props) => {
  const { items, descr } = props;
  const classes = useStyles();

  const renderItemIcon = (name: string) => {
    switch (name) {
      case 'Extreme travel':
        return <PublicIcon style={{ width: '100%', height: '100%' }}/>
      case 'Sport':
        return <SportsVolleyballIcon style={{ width: '100%', height: '100%' }}/>
      case 'Playing piano':
        return <StraightenIcon style={{ width: '100%', height: '100%' }}/>
      case 'Snowboarding':
        return <SnowboardingIcon style={{ width: '100%', height: '100%' }}/>
      default:
        return <FastfoodIcon style={{ width: '100%', height: '100%' }}/>}
  }

  const renderItems = (items:Array<object> | undefined) => {
    return items?.map((item: any) => {
      return (
          <TimelineItem style={{display:'flex', flexWrap:'wrap', alignItems:'center', flexDirection:'column'}} className={classes.simpleTimelineItem}>
          <TimelineSeparator>
            <TimelineDot sx={{bgcolor:'#bad7d6', width: '50px', height: '50px' }}>
              {renderItemIcon(item.name)}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" >{ item.name }</Typography>
          </TimelineContent>
          </TimelineItem>
      )
    })
  }

  return (
    <>
      <Typography style={{ color: "#66a19f", padding: '36px 0 0 16px', fontWeight: 600, fontSize: "33px" }} variant='body1'>{descr}</Typography>
      <Timeline style={{ marginTop: '26px', display:'flex', flexDirection:'row', flexWrap:'wrap' }}>
          {renderItems(items)}
      </Timeline>
      </>
  )
}

Hobbies.defaultProps = {
  items: [
    {
    name: 'Extreme travel'
    },
    {
      name: 'Playing piano'
    },
    {
      name: 'Cooking'
    },
    {
      name: 'Snowboarding'
    },
    {
      name: 'Sport'
    },
  ],
  descr: 'Hobbies and interests'
}

export default Hobbies;