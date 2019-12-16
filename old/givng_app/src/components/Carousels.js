import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "./Carousels.css";

const StyledCarousel = styled.div``;

class Carousels extends React.Component {
  state = {};
  render() {
    return (
      <StyledCarousel>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d22z712l2oez7l.cloudfront.net/w800-h600/packages/birmingham-26173-the-land-of-snow-christmas-party_4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Christmas</h3>
              <p>Merry Xmas!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/happy-easter-basket-greetings-card-royalty-free-image-931476052-1551823295.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Easter</h3>
              <p>Happy Easter!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/halloween-scene_alexanderrathsss.jpg?itok=sxMuZ4Ov"
            />

            <Carousel.Caption>
              <h3>Halloween</h3>
              <p>Enjoy Halloween!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ncqma.com/wp-content/uploads/2016/01/surprise-happy-birthday-gifts-5.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Birthday</h3>
              <p>Happy Birthday!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </StyledCarousel>
    );
  }
}

export default Carousels;
