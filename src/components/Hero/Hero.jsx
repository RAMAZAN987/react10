import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/pexels-iamloe-707377 (1).jpg'


function hero({h1, p, image}) {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{h1}</h5>
          <p>{p}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{h1}</h5>
          <p>{p}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{h1}</h5>
          <p>
          {p}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default hero;