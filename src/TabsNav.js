import React from 'react'
import { Row, Col, Tabs, Tab, TabContainer, TabContent, Nav} from 'react-bootstrap'
import Characters from './Characters'
import Planets from './Planets'



const TabsNav = () => {

  // const handleSelect = eventKey => {
  //   eventKey === 1 ? <Planets /> : <Characters />
  // }

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="planets">
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
      </Tab.Container>
    </>
  )
}

export default TabsNav
