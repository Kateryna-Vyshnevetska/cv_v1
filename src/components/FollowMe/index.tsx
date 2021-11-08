import Typography from '../Unknown/Typography'
import Grid from '../Unknown/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FollowMeProps {
}

const FollowMe: React.FC<FollowMeProps> = () => {
  return (
    <>
      <Typography style={{ color: "#66a19f", padding: '36px 0 0 16px', fontWeight: 600, fontSize: "33px" }} variant='body1'>Follow me</Typography>
      <Grid style={{ padding: '30px 0 0 25px', textAlign:'center' }}>
        <a href="https://www.linkedin.com/in/kateryna-kopchuk-1421821b8/" style={{ textDecoration: 'none', color: '#bad7d6', fontSize: '30px', width: '80px', height: '80px',  }} target="_blank"><LinkedInIcon style={{color:'#5ba99d',width:'80px', height:'80px'}}/></a>
        <a href="https://www.instagram.com/kateryna_kopchuk/" style={{textDecoration:'none', color:'#bad7d6', fontSize:'30px', width: '80px', height: '80px', paddingLeft:'30px'}} target="_blank"><InstagramIcon style={{color:'#5ba99d',width:'80px', height:'80px'}}/></a>
        <a href="https://www.facebook.com/olivka.dushka" style={{textDecoration:'none', color:'#bad7d6', fontSize:'30px', width: '80px', height: '80px', paddingLeft:'30px'}} target="_blank"><FacebookIcon style={{color:'#5ba99d', width:'80px', height:'80px'}}/></a>
      </Grid>
      </>
  )
}

export default FollowMe;