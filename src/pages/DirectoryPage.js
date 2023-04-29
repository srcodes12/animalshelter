import { Container } from "reactstrap";
import CampsitesList from "../features/animals/AnimalsList";
import SubHeader from "../components/SubHeader";

const DirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList />
    </Container>
  );
};

export default DirectoryPage;
