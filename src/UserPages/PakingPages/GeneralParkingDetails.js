import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TrafficDetaiRap = styled.div`
  width: 100%;
  font-family: "Roboto";

  padding: 30px;
  p {
    font-size: 15px;
    font-weight: 400;
    color: #667085;
  }
  h2 {
    color: #112240 !important;
    max-width: 383px;
    font-size: 24px;
    font-weight: 700;
  }
  .icon-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .back-arrow-left {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #11224014;
  }
  .icon-header h2 {
    color: #112240;
    font-size: 18px;
    font-weight: 600;
  }
  .tech-div p {
    font-size: 12px;
  }
  .tech-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tech {
    background: #c7edcc;
    width: 72px;
    height: 24px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  #359742;
    font-size: 10px;
    font-weight: 400;
  }
  .lasma p {
    font-size: 12pv;
  }
  .lasma {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .all-details-divs p {
    max-width: 535px;
  }
  .all-details-divs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .traffic-detalis-all-divs {
    border: 1px solid #1122401f;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
   .rating-star {
    display: flex;
    align-items: center;
    flex-direction: row !important;
    gap: 5px;
   }
    .parking-images {
        width: 150px;
        border-radius: 10px;
        height: 100px;
    }
   .parking-images {
    display: flex;
    gap: 20px;
   }
   .book-now {
     width: 120px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56BF2A;
    text-decoration: none;
    color: #56BF2A;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
   }
`;

const GeneralParkingDetials = () => {
  return (
    <TrafficDetaiRap>
      <div className="icon-header">
        <Link to="/users/parking">
          <Icon
            className="back-arrow-left"
            icon="material-symbols-light:arrow-left-alt"
            width="13"
            height="13"
            style={{ color: "#112240" }}
          />
        </Link>
        <h2>Parking Details</h2>
      </div>
      <div className="traffic-detalis-all-divs">
        <div className="all-details-divs">
          <img src="/images/traffic-2.png" alt="" />
          <div className="tech-div">
            <p className="tech">Pending</p>
            <div className="rating-star">
                 <Icon
              icon="material-symbols:star-rounded"
              width="20"
              height="20"
              style={{ color: "orange" }}
            />
                 <Icon
              icon="material-symbols:star-rounded"
              width="20"
              height="20"
              style={{ color: "orange" }}
            />
                 <Icon
              icon="material-symbols:star-rounded"
              width="20"
              height="20"
              style={{ color: "orange" }}
            />
                 <Icon
              icon="material-symbols:star-rounded"
              width="20"
              height="20"
              style={{ color: "orange" }}
            />
                 <Icon
              icon="material-symbols:star-rounded"
              width="20"
              height="20"
              style={{ color: "orange" }}
            />
            
            </div>
          </div>
          <h2>Phantom Space</h2>
          <div className="lasma">
            <img src="/images/traffic_person.png" alt="" />
            <p>Owner: Lionel Messi</p>
          </div>
          <div className="lasma">
            <Icon
              icon="mingcute:location-line"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />{" "}
            <p>28 Allen Avenue, Ikeja Lagos</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Porttitor viverra facilisis
            sit purus integer consectetur eros. Risus imperdiet faucibus mollis
            vel cursus dolor pretium tincidunt. Vitae vivamus sem a nisi porta
            in ultrices in. Aenean convallis morbi pretium egestas neque.
            Malesuada sed faucibus tristique sed fames vulputate. Volutpat porta
            amet suspendisse volutpat tellus. Sit dis vestibulum proin sed diam
            nulla nibh diam scelerisque.
          </p>
          <div className="parking-images">
            <img src="/images/traffic-2.png" alt="" />
            <img src="/images/traffic-2.png" alt="" />
          </div>
          <button className="book-now">Book now</button>
        </div>
      </div>
    </TrafficDetaiRap>
  );
};

export default GeneralParkingDetials;
