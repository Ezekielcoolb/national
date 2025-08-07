import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  bookParkSpace,
  fetchMyParkinSpaceDetails,
  resetBookingState,
} from "../../Redux/slices/secondUserSlice";
import { ClipLoader } from "react-spinners";

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
    color: #112240 ;
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
    color: #359742;
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
    border: 1px solid #56bf2a;
    text-decoration: none;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
  }
`;

const GeneralParkingDetials = () => {
  const { id } = useParams();
  const { backgroundChange} = useSelector((state)=> state.app)

  const dispatch = useDispatch();
  const {
    bookparking,
    loading,
    myParkDetails,
    bookparkingsuccess,
    error,
    bookingloading,
  } = useSelector((state) => state.otherUser);
  console.log(bookparkingsuccess);

  const handleBBookParkSpace = () => {
    if (id) {
      dispatch(bookParkSpace(id));
    }
  };

  console.log(myParkDetails);

  const details = myParkDetails?.data;

  useEffect(() => {
    if (id) {
      dispatch(fetchMyParkinSpaceDetails(id));
    }
  }, [dispatch, id]);

  const getStatusColor = (status) => {
    if (status === "pending") return "#359742";
    if (status === "accepted") return "green";
    if (status === "available") return "green";
    if (status === "cancelled") return "red";
    if (status === "declined") return "red";
    if (status === "closed") return "red";
    if (status === "completed") return "green";
    return "#112240"; // Default color if priority is missing or unrecognized
  };

  return (
    <TrafficDetaiRap>
      <div className="icon-header">
        <Link to="/users/parking">
          <Icon
            className="back-arrow-left"
            icon="material-symbols-light:arrow-left-alt"
            width="13"
            height="13"
          style={{ color: backgroundChange=== true ? "white" : "#112240" }}
          />
        </Link>
        <h2
         style={{ color: backgroundChange=== true ? "white !important" : "" }}
        >Parking Details</h2>
      </div>
      <div className="traffic-detalis-all-divs">
        <div className="all-details-divs">
          <img src="/images/traffic-2.png" alt="" />
          <div className="tech-div">
            <p className="tech">Pending</p>
            <div className="rating-star">
              <span style={{ color: getStatusColor(details?.status) }}>
                {details?.status}
              </span>
            </div>
          </div>
          <h2>{details?.name}</h2>
          <div className="lasma">
            <img src="/images/traffic_person.png" alt="" />
            <p>Owner: {details?.user?.last_name} {details?.user?.first_name}</p>
          </div>
          <div className="lasma">
            <Icon
              icon="mingcute:location-line"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />{" "}
            <p>{details?.address}</p>
          </div>
          <p>{details?.description}</p>
          <div className="parking-images">
            <img src="/images/traffic-2.png" alt="" />
            <img src="/images/traffic-2.png" alt="" />
          </div>
          <button onClick={handleBBookParkSpace} className="book-now">
            {bookingloading ? (
              <ClipLoader color="green" size={35} />
            ) : (
              "Book now"
            )}
          </button>
        </div>
      </div>

      {bookparkingsuccess ? (
        <div className="dropdown-container">
          <div className="cupon-drop">
            <p>Parking space booked successfully</p>
            <p>
              Please wait until the owner accept the booking. <br /> Thanks!
            </p>
            <div className="button-div">
              <button
                onClick={() => dispatch(resetBookingState())}
                className="submit-btn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </TrafficDetaiRap>
  );
};

export default GeneralParkingDetials;
