import {React,useState,useEffect} from 'react'
import { Row, Col,  Tab, Nav} from 'react-bootstrap'
import Characters from './Characters'
import Planets from './Planets'
import Loader from './Loader'



const TabsNav = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 2000)}, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && <Tab.Container id="left-tabs-example" defaultActiveKey="planets">
        <Row>
          <Col sm={12}>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="planets">Planets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="characters">Characters</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="planets">
                <Planets />
              </Tab.Pane>
              <Tab.Pane eventKey="characters">
                <Characters />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>}
    </>
  )
}

export default TabsNav
