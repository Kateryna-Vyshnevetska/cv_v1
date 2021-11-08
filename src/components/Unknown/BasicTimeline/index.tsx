import * as React from 'react';
import useStyles from './useStyles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LinearProgress from '@mui/material/LinearProgress';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '../Typography';

interface BasicTimelineProps {
  items?: Array<object>;
}

const BasicTimeline: React.FC<BasicTimelineProps> = (props) => {
  const { items } = props;
  const classes = useStyles();

  React.useEffect(() => {
    if (items) {
      renderItems(items)
    }
  }, [items])

  const renderItemHeader = (title: string, descr: string, technology: string, color: string, name: string) => {
    
    return (
    <>
        <TimelineSeparator>
          {!title && <TimelineConnector />}
          <TimelineDot sx={{bgcolor: color ? color : '', width: color ? '50px' : '', height: color ? '50px' : ''}}>
            {title === 'PROJECT EXPERIENCE' ? <WorkIcon style={{ width: '100%', height: '100%' }}/> :
              <SchoolOutlinedIcon style={{ width: '100%', height: '100%' }}/>}
          </TimelineDot>
          {!title && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {title && <Typography variant="h4" style={{
            fontWeight: 600,
            background: "-webkit-linear-gradient(45deg, #d75a31, #cf846b, #c99a67, #729aa3, #5ba99d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>{title}</Typography>}
          {name && <Typography variant="h5" style={{fontWeight: 600, color:'#97989b'}} >{name}</Typography>}
          {descr && <Typography variant="h5" style={{fontWeight: 600}}>{technology}</Typography>}
          <Typography variant="h6" >{ descr }</Typography>
        </TimelineContent>
      {/* </TimelineItem> */}
        </>
    )
  }

  const renderItems = (items: Array<object> | undefined) => {

    return items?.map((item: any) => {
      return (
        <TimelineItem className={classes.simpleTimelineItem} style={{paddingLeft: item.descr ? '19px' : '', alignItems: item.title ? 'center' : '',}}>
          {item.descr || item.title ? renderItemHeader(item.title, item.descr, item.technology, item.color, item.name) :
          <>
          <TimelineSeparator>
            <TimelineDot sx={ { backgroundColor: "#adb1b7"}}/>
            <TimelineConnector />
            </TimelineSeparator>
          <TimelineContent sx={{ fontSize: 20, color: "#4c4e50", fontWeight: 600 }}>
            {item.name}
            {item.linearProgress && <LinearProgress classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} sx={{ height: 20, borderRadius: 20, }} variant="determinate" value={item.linearProgressValue}/>}
              </TimelineContent>
              </>
          }
      </TimelineItem>
      )
    })
  }

  return (
    <Timeline style={{marginTop: '5px'}}>
      {renderItems(items)}
    </Timeline>
  );
}

BasicTimeline.defaultProps = {
  items: [],
}

export default BasicTimeline;