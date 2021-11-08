import Rating from '@mui/material/Rating';
import Typography from '../Typography';
import Grid from '../Grid';

interface BasicRatingProps {
  items?: Array<object>
}

const BasicRating: React.FC<BasicRatingProps> = (props) => {
  const { items } = props;
  
  const renderItems = (items: Array<object> | undefined) => {
    return items?.map((item: any) => {
      return (
        <>
          <Grid style={{paddingRight: '16px', textAlign:'center'}}>
          <Typography sx={{ fontSize: 20, color: "#4c4e50", fontWeight: 600 }}>{item.name}</Typography>
          <Rating sx={{color:'#66a19f'}} name="read-only" value={item.value} readOnly />
        </Grid>
          </>
      )
    })
  }

  return (
    <>
      <Typography style={{ color: "#66a19f", padding: '26px 0 0 16px', fontWeight: 600, fontSize:"33px"}} variant='body1'>Personal Skills</Typography>
      <Grid style={{ padding: '20px 0 0 16px', display: "flex", flexWrap: 'wrap'}}>
        {renderItems(items)}
      </Grid>
    </>
  )
}

BasicRating.defaultProps = {
  items: [],
}
export default BasicRating;