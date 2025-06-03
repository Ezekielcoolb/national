import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  changeBookingStatus,
  incomingBookedParkingSpace,
  resetBookingStatusState,
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
    border: 1px solid blue;
    text-decoration: none;
    color: blue;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
  }
  .changestatus {
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
  }
  .changestatus select {
    width: 390px;
    border-radius: 100px;
    height: 45px;
  }
  .changestatus-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .btns {
    display: flex;
    gap: 10px;
  }
  .cancel {
    background: transparent;
    color: green;
    border: 1px solid green;
  }
`;

const IncomingParkingDetials = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
    const { backgroundChange} = useSelector((state)=> state.app)
  
  const { bookedstatusloading, bookedstatusparking, incomingparking } =
    useSelector((state) => state.otherUser);
  const [changedStatus, setChangesStatus] = useState("");
  const [changeStatusShow, setChangeStatusShow] = useState(false);
  const items = incomingparking?.data?.data;
  console.log(bookedstatusparking);

  // Make sure `id` is a number if your item IDs are numbers
  const numericId = parseInt(id, 10);

  const selectedItem = items?.find(
    (item) => parseInt(item.id, 10) === numericId
  );

  const parkInfoRaw = selectedItem?.park_info;

  let park = null;
  if (parkInfoRaw) {
    try {
      park = JSON.parse(parkInfoRaw);
    } catch (e) {
      console.error("Invalid JSON in park_info:", e);
    }
  }
  console.log(selectedItem);
  const handleShowChangeStatus = () => {
    setChangeStatusShow(!changeStatusShow);
  };

  useEffect(() => {
    dispatch(incomingBookedParkingSpace());
  }, [dispatch]);

  const getStatusColor = (status) => {
    if (status === "pending") return "#359742";
    if (status === "accepted") return "green";
    if (status === "cancelled") return "red";
    if (status === "declined") return "red";
    if (status === "completed") return "green";
    return "#112240"; // Default color if priority is missing or unrecognized
  };

  const handleStatusChange = () => {
    dispatch(changeBookingStatus({ id, changedStatus }));
    setChangeStatusShow(!changeStatusShow);
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
         style={{ color: backgroundChange=== true ? "white" : "" }}
        >Parking Details</h2>
      </div>
      <div className="traffic-detalis-all-divs">
        <div className="all-details-divs">
          <img src="/images/traffic-2.png" alt="" />
          <div className="tech-div">
            {/* <p className="tech">Pending</p> */}
            <span style={{ color: getStatusColor(selectedItem?.status) }}>
              {selectedItem?.status}
            </span>
          </div>
          <h2>{park?.name}</h2>
          {/* <div className="lasma">
            <img src="/images/traffic_person.png" alt="" />
            <p>Owner: Lionel Messi</p>
          </div> */}
          <div className="lasma">
            <Icon
              icon="mingcute:location-line"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />{" "}
            <p>{park?.address}</p>
          </div>
          <p>{park?.description}</p>
          <div className="parking-images">
            <img src="/images/traffic-2.png" alt="" />
            <img src="/images/traffic-2.png" alt="" />
          </div>
          <div>
            <button onClick={handleShowChangeStatus} className="book-now">
              Edit
            </button>
            {changeStatusShow ? (
              <>
                {selectedItem?.status === "pending" ? (
                  <div className="dropdown-container">
                    <div className="changestatus">
                      <div className="changestatus-div">
                        <h2>Edit Status</h2>
                        <select
                          value={changedStatus}
                          onChange={(e) => setChangesStatus(e.target.value)}
                        >
                          <option value="">Select status</option>
                          <option value="accepted">Accept</option>
                          <option value="declined">Decline</option>
                        </select>
                        <div className="btns">
                          <button onClick={handleStatusChange}>
                            {bookedstatusloading ? (
                              <ClipLoader color="white" size={35} />
                            ) : (
                              "Continue"
                            )}
                          </button>
                          <button
                            onClick={handleShowChangeStatus}
                            className="cancel"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedItem?.status === "accepted" ? (
                  <div className="dropdown-container">
                    <div className="changestatus">
                      <div className="changestatus-div">
                        <h2>Edit Status</h2>
                        <select
                          value={changedStatus}
                          onChange={(e) => setChangesStatus(e.target.value)}
                        >
                          <option value="">Select status</option>
                          <option value="completed">Completed</option>
                        </select>
                        <div className="btns">
                          <button onClick={handleStatusChange}>
                            {bookedstatusloading ? (
                              <ClipLoader color="white" size={35} />
                            ) : (
                              "Continue"
                            )}
                          </button>
                          <button
                            onClick={handleShowChangeStatus}
                            className="cancel"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {bookedstatusparking ? (
        <div className="dropdown-container">
          <div className="cupon-drop">
            <p>You have successfully {changedStatus} the parking space</p>
            <p>Thanks!</p>
            <div className="button-div">
              <button
                onClick={() => dispatch(resetBookingStatusState())}
                className="submit-btn"
              >
                {" "}
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

export default IncomingParkingDetials;
