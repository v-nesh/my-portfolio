import React from "react";
import styled from "styled-components";
// import PText from "./PText";
import MapImg from "../assets/images/mymap.png";

const MapStyles = styled.div`
  /* background: url(${MapImg}) no-repeat center / cover; */
  min-height: 400px;
  .container {
    position: relative;
    min-height: 300px;
    width: 100%;
  }
  .map__card {
    position: relative;
    top: 10%;
    bottom: 5%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--deep-dark);
    width: 100%;
    border-radius: 12px;
  }

  .map {
    position: relative;
    min-height: 250px;
    border-radius: 5px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    .map__card {
      top: 10%;
      bottom: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    @media only screen and (max-width: 400px) {
      .map__card {
        top: 10%;
        bottom: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          {/* <h3 className="map__card__heading">here is me</h3> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d462.43963991872437!2d79.12176081389848!3d10.772832520039463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675537195515!5m2!1sen!2sin"
            className="map"
            // width="1150"
            title="map"
            // height="250"
            // style="border:0;"
            // allowfullscreen="1"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </MapStyles>
  );
}
