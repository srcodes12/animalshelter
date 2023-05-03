import { Container } from "reactstrap";
import AnimalsList from "../features/animals/AnimalsList";
import SubHeader from "../components/SubHeader";

const DirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <AnimalsList />
    </Container>
  );
};

export default DirectoryPage;
