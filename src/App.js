import React from 'react'
import './index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from './Navbar';
import TabsNav from './TabsNav';

const App = () => {
  return (
    <Container className='p-5'>
      <Row className="justify-content-center">
        <Navbar />
        <TabsNav />
      </Row>
    </Container>
  )
}

export default App
