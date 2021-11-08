import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  colorPrimary: {
    backgroundColor: '#bad7d6 !important',
  },
  barColorPrimary: {
    backgroundColor: '#66a19f !important',
  },
  simpleTimelineItem: {
    '&::before': {
      display: 'none',
    },
  }
}))