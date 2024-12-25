import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MapRoad from "../Map";

const TaskRap = styled.div`
  padding: 30px;
  width: 100%;
  font-family: "Roboto";
  @media (max-width: 1300px) {
    padding: 20px 10px !important;
  }
  @media (max-width: 678px) {
    padding: 20px 1px !important;
  }
  h2 {
    color: #112240;
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    color: #112240;
    font-size: 16px;
    font-weight: 500;
  }
  h5 {
    color: #112240;
    font-size: 15px;
    font-weight: 500;
  }
  p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .ride-map {
    height: 263px !important;
  }
  .car-model {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .car-div p {
    font-size: 12px;
  }
  .car-div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .car-address div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .car-address {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ride-info {
    border-top: 1px solid #1122401f;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ride-info p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ride-info span {
    color: #112240;
  }
  .edit-btn,
  .flag-btn,
  .ride-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    height: 40px;
    width: 154px;
  }
  .edit-btn {
    color: #112240;
    background: #eaebee;
  }
  .flag-btn {
    color: #ffffff;
    background: #e72121;
  }
  .ride-btn {
    color: #ffffff;

    background: #56bf2a;
  }
  .ride-button-div {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .left-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .status-ride {
    background: #ffeedd;
    width: 77px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff8c1a;
    font-size: 12px;
    border-radius: 100px;
    font-weight: 500;
  }
  .right-header {
    border-bottom: 1px solid #1122401f;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right-inne-div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px;
    align-items: center;
  }
  .right-inner-info p {
    display: flex;
    align-items: center;
    gap: 70px;
    justify-content: space-between;
  }
  .right-inner-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .images-car {
    display: flex;
    gap: 10px;
    padding: 15px;
  }
  .right-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 35%;

    border-left: 1px solid #1122401f;
  }
  .left-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 65%;

    padding: 20px;
    padding-bottom: 80px;
  }
  .all-rides-details {
    border: 1px solid #1122401f;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
  }
  .right-head {
    padding: 0px 20px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #1122401f;
  }
  .send-message {
    border-radius: 100px;
    width: 126px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56bf2a;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
  }
  .ride-detail-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
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
  .icon-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .flag-continue,
  .cancel-continue {
    width: 336px;
    height: 50px;
    border-radius: 100px;
    background: #f8253a;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cancel-continue {
    background: #6670851f !important;
    color: #112240 !important;
  }
  .move-to-end {
    display: flex;
    flex-direction: column;
    gap: 200px;
    justify-content: space-between;
  }
  @media (max-width: 992px) {
    .all-rides-details {
      flex-direction: column;
    }
    .left-ride-div,
    .right-ride-div {
      width: 100%;
    }
    .right-ride-div {
      border-left: 0px solid #1122401f !important;
    }
  }
`;

const ItemDetails = () => {
  const [dropdownVisible, setDropdownVisisble] = useState(false);

  const handleDropFlag = () => {
    setDropdownVisisble(!dropdownVisible);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownVisisble(false);
      }
    };
    if (dropdownVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownVisible]);
  return (
    <TaskRap>
      <div className="ride-detail-header">
        <div className="icon-header">
          <Link to="/users/history">
            <Icon
              className="back-arrow-left"
              icon="material-symbols-light:arrow-left-alt"
              width="13"
              height="13"
              style={{ color: "#112240" }}
            />
          </Link>
          <h2>Lodge Details</h2>
        </div>
        <Link className="send-message">Send a Message</Link>
      </div>
      <div className="all-rides-details">
        <div className="left-ride-div">
          <div className="ride-map">
            <MapRoad />
          </div>
          <div className="car-div">
            <div className="car-model">
              <h5>Toyota Camry XLE</h5>
              <h5>2333455600</h5>
            </div>
            <p>20 Sep, 2024 10:00PM</p>
          </div>
          <div className="car-address">
            <img src="/images/address_anchor.png" alt="" />
            <div>
              <p>289 Allen Avenue Ikeja Lagos</p>
              <p>80 Box Lane Mary Street Lekki Ajah Express Way Lagos</p>
            </div>
          </div>
          <div className="ride-info">
            <p>
              Lodge ID
              <span>2333455600</span>
            </p>
            <p>
              Vehicle Name
              <span>Toyota Camry XLE</span>
            </p>
            <p>
              Vehicle Number
              <span>LAG-565768</span>
            </p>
            <p>
              Driver Name
              <span>Michael Solomon</span>
            </p>
          </div>
          <div className="ride-button-div">
            <Link className="edit-btn">Edit</Link>
            <Link onClick={handleDropFlag} className="flag-btn">
              Flag Ride
            </Link>
            <Link className="ride-btn">Ride Complete</Link>
          </div>
        </div>
        <div className="right-ride-div">
          <div className="right-header">
            <h4>Description</h4>
            <p className="status-ride">Ongoing</p>
          </div>
          <div className="move-to-end">
            <div className="right-inne-div">
              <p style={{ maxWidth: "367px" }}>
                Lorem ipsum dolor sit amet consectetur. Ipsum urna aliquet eget
                amet urna. Neque mattis dui imperdiet proin dignissim. Cursus
                congue tellus velit et. Neque id.
              </p>
            </div>

            <div>
              <div className="right-head">
                <h4>Images</h4>
              </div>
              <div className="images-car">
                <img src="/images/tv_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {dropdownVisible ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <div>
              <img src="/images/flag_warn.png" alt="" />
              <h2>Flag Ride</h2>
              <p>
                Are you sure you want to flag this ride, flagging the ride will
                send a message to security officials and your Next of KIN{" "}
              </p>
              <Link className="flag-continue">Continue</Link>
              <Link
                onClick={() => setDropdownVisisble(false)}
                className="cancel-continue"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </TaskRap>
  );
};
export default ItemDetails;
