import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectAnimalsById } from "../features/animals/AnimalsSlice";
import AnimalsDetail from "../features/animals/AnimalsDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import Error from "../components/Error";
import Loading from "../components/Loading";

const DetailPage = () => {
  const { animalId } = useParams();
  const animal = useSelector(selectAnimalsById(animalId));
  console.log("animal:", animal);

  const isLoading = useSelector((state) => state.animals.isLoading);
  const errMsg = useSelector((state) => state.animals.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMm={errMsg} />;
  } else {
    content = (
      <>
        <AnimalsDetail animal={animal} />
        <CommentsList animalId={animalId} />
      </>
    );
  }

  return (
    <Container>
      {animal && <SubHeader current={animal.name} detail={true} />}
      <Row>{content}</Row>
    </Container>
  );
};

export default DetailPage;