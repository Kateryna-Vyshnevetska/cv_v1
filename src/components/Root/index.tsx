import { Container } from "@material-ui/core";
import Header from "../Header";
import ProfileLine from '../ProfileLine';
import MainContent from "../MainContent";

const Root: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <ProfileLine />
        <MainContent/>
      </Container>
    </>
  )
}

export default Root;