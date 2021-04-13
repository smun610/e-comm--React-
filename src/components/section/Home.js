import {Carousel} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Carousel.css";

import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <Carousel fade >
        <Carousel.Item interval={600}  style={{"width":"300px"} }>
          <img 
             style={{'height':"100%"} }
            src="https://drmartens.a.bigcontent.io/v1/static/E_S0_SLE_1460_COLOUR_P_HERO_DESKTOP"
            alt="First slide"
            bsPrefix = 'carousel-item'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={600} style={{"width":"300px"}}>
          <img
            src="https://drmartens.a.bigcontent.io/v1/static/E_S0_SLE_1460_FURLINED_HERO_DESKTOP"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={600} style={{"width":"300px"}}  >
          <img
            src="https://drmartens.a.bigcontent.io/v1/static/E_S0_SLE_SANDALS_ON_FOOT_HERO_DESKTOP"
            alt="Third slide"
          />
          <Carousel.Caption > 
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
