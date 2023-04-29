import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const AnimalsDeatil = ({animal}) => {
  const { image, name, description } = animal;

  return ( 
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AnimalsDeatil;