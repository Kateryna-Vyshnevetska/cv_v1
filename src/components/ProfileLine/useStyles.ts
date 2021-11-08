import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  container: {
    alignItems: 'center'
  },
  itemLeft: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'139px',
    backgroundColor: '#9ef79e',
    position:'relative',
    padding: '0 10px 0 50px',
    borderRadius: "0 20px 0 0",
    "&:after": {
      position: "absolute",
      content: "''",
      top: '11px',
      right: '-58px',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 60,
      borderBottomWidth: 128,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#5ba99d',
      borderLeftColor: 'transparent',
    }
  },
  secondItemRight: {
    textAlign: 'right'
  },
  itemRight: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#f7a1a1',
    position:'relative',
    borderRadius: "0 0 0 20px",
    "&:after": {
      position: "absolute",
      content: "''",
      top: 0,
      left: '-59px',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 128,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 61,
      borderTopColor: '#adb1b8',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent ',
      borderLeftColor: 'transparent',
    }
  }
}))