import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedAnimals } from "../animals/AnimalsSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
  const items = useSelector(selectFeaturedAnimals);

  console.log("display items", items);

  return (
    <>
    <Row>
      {items.isLoading ? (
        <Loading />
      ) : items.errMsg ? (
        <Error errMsg={items.errMsg} />
      ) : (
        <Col xs={12} sm={10} md={8} lg={8} className="mx-auto">
          <AnimatedDisplayCard items={items.featuredItems}  style={{width: '100%', height: '500px', borderRadius: '15px'}}/>
        </Col>
      )}
    </Row>
  
  </>
  );
};
export default DisplayList;