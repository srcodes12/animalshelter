import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";


const HomePage = () => {
  return (
    <Container>
      <SubHeader current='Home' />
      <div class="paws-container">
  <div class="paw"></div>
  <div class="paw"></div>
  <div class="paw"></div>
</div>
      <DisplayList />
    </Container>
  );
};

export default HomePage;