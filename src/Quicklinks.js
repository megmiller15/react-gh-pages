import React, { Component } from 'react';
import './Quicklink.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'



class Quicklinks extends Component {
    render(){
    return ( 

        <div className="Quicksection">
        <Container>
        <Row>
          <Col xs><div className="Quick1">hey</div></Col>
          <Col xs={{ order: 12 }}><div className="Quick2">hey</div></Col>
          <Col xs={{ order: 1 }}><div className="Quick3">hey</div></Col>
        </Row>
      </Container>

</div>
    )
    
        
    }
}

export default Quicklinks;