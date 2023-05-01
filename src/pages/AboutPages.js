import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from '../components/SubHeader';
import PartnersList  from "../features/partners/PartnersList";

//<SubHeader current={AboutUs} detail={true} />
//<SubHeader current='Home' />

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current='About Us' />
        <Row className='row-content'>
          <Col sm='6'>
            <h3>Our Mission</h3>
              <p>
              Paw and Claw Haven's mission is to rescue, rehabilitate, and rehome animals in need, 
              while promoting responsible pet ownership and animal welfare.
              We aim to reduce the number of homeless pets through spaying and neutering initiatives, 
              and strive to create a world where every animal is valued and loved.
              </p>
          </Col>
          <Col sm='6'>
            <Card>
              <CardHeader className='bg-primary text-white'>
                  <h3>Facts at a Glance</h3>
              </CardHeader>
              <CardBody>
              <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 3, 2016</dd>
                                <dt className='col-6'>No. of animals rescued 2022</dt>
                                <dd className='col-6'>152</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>98</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>42</dd>
                            </dl>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <blockquote className='blockquote'>
                  <p>
                  I cannot express enough how grateful I am for Paw and Claw Haven.
                  They rescued my sweet dog from a terrible situation and gave her the love
                  and care she needed to thrive.
                  I don't know where she would be without them. Thank you, Paw and Claw Haven!
                  </p>
                  <footer className='blockquote-footer'>
                  Muriel Strode,{' '}
                      <cite title='Source Title'>
                        "Furry Friends Pet Supplies" - The Puppy Court,
                        2018
                      </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            
            <h3>
              Community Partners
            </h3>
            <PartnersList />
          </Col>
        </Row>
    </Container>
  )
};

export default AboutPage;