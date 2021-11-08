import { Typography } from '@material-ui/core';
import BasicTimeline from '../Unknown/BasicTimeline';


interface ProSkillsProps {
  items?: Array<object>;  
}

const ProSkills: React.FC<ProSkillsProps> = (props) => {
  const { items } = props;
  return (
    <>
      <Typography style={{ color: "#66a19f", padding: '16px 0 0 16px', fontWeight: 600}} variant='body1'>Pro Skills</Typography>
      <BasicTimeline items={ items }/>
      </>
  )
}

ProSkills.defaultProps = {
  items: [
    {
      name: 'JavaScript',
      linearProgress: true,
      linearProgressValue: 90,
    },
    {
      name: 'React',
      linearProgress: true,
      linearProgressValue: 90,
    },
    {
      name: 'TypeScript',
      linearProgress: true,
      linearProgressValue: 85,
    },
    {
      name: 'Node.js',
      linearProgress: true,
      linearProgressValue: 70,
    },
    {
      name: 'React Native',
      linearProgress: true,
      linearProgressValue: 50,
    },
    {
      name: 'Next.js',
      linearProgress: true,
      linearProgressValue: 60,
    }],
}
export default ProSkills