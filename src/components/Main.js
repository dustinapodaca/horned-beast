import React from 'react';
import HornedBeast from './HornedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../assets/data/data.json';


class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
          {data.map((beast, index) => (
            <Col>
              <HornedBeast
                key={index}
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Main;



/* <>
  <div id="mainDiv">
    <HornedBeast
      title="Fierce Dragon"
      src={beast1}
      description="A dragon ready to spew forth flame."
      alt="Dragon"
    />
    <HornedBeast
      title="Unicorn and Family"
      src={beast2}
      description="A unicorn and her child running in a field."
      alt="Unicorn"
    />
  </div>
</> */