import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./AnimalCards";
import { selectAllanimals } from "./AnimalsSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { ANIMALS } from "../../app/assets/ANIMALS";

const AnimalsList = () => {
  const animals = useSelector(selectAllanimals);
  console.log("animals:", ANIMALS);

  const isLoading = useSelector((state) => state.animals.isLoading);
  const errMsg = useSelector((state) => state.animals.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row className="ms-auto">
      {animals.map((animal) => {
        return (
          <Col md="5" className="m-4" key={animal.id}>
            <CampsiteCard animal={animal} />
          </Col>
        );
      })}
    </Row>
  );
};

export default AnimalsList;
