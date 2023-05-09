import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedAnimals } from "../animals/AnimalsSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedAnimals(state)
  ]);

  console.log("display items", items);

  return (
    <>
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
    </Row>
  
  </>
  );
};

export default DisplayList;