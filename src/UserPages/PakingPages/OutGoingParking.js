import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cancelBookedParkSpace, fetchMyParkingSpace, myBookedParkingSpace, resetCancelBookingState } from "../../Redux/slices/secondUserSlice";

const TaskRap = styled.div`
  
  width: 100%;
  font-family: "Roboto";
  h4 {
    font-size: 16px;
    font-weight: 600;
  }
  h5 {
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: #667085;

  }

  label {
    font-size: 14;
    color: #60667a;
    font-weight: 600;
  }
  .star {
    font-weight: 700;
    color: red;
  }
  .book-now {
    width: 94px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56BF2A;
    text-decoration: none;
    color: #56BF2A;
    font-size: 12px;
    font-weight: 500;

  }
  .second-park-td  {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .second-park-td h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 600;
  }
.phantom h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 500;

}
 .phantom p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 5px;
 }
 .phantom {
    display: flex;
    flex-direction: column;
    gap: 5px;
 }
 .parking-div {
    display: flex;
    align-items: center;
    gap: 10px;
 }

`;

const MyOutGoingParking = () => {
    const navigate = useNavigate();
      const dispatch = useDispatch()
        const { parkingloading,  bookedparking, cancelbookparking, cancelbookingsuccess, loading, success, error, data, parkingsuccess } = useSelector((state) => state.otherUser);
    const { backgroundChange} = useSelector((state)=> state.app)
  
  console.log(cancelbookingsuccess);

const items = bookedparking?.data?.data

  const handleRowClick = (id) => {
    
    navigate(`/users/parking/details/${id}`)
  };
  //   pagination

   useEffect(() => {
      dispatch(myBookedParkingSpace());
    }, [dispatch]);


  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(items?.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentItems = items?.slice(indexOfFirstCase, indexOfLastCase);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStatusColor = (status) => {
    if (status === "pending") return "#359742";
    if (status === "accepted") return "#F8253A";
     if (status === "cancelled") return "red";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
 
   const handleParkingDetail = () => {
  }

    const handleCancelBookParkSpace = (id) => {
      
        dispatch(cancelBookedParkSpace(id))
    
    }


  return (
    <TaskRap>
      <div>
        <div className="table-container ">
          <div className="logger-header">
            <div className="search-divs">
              <input type="text" placeholder="search coupon..." />
              <Icon
                className="search-position"
                icon="material-symbols-light:search"
                width="18"
                height="18"
                style={{ color: "#9499AC" }}
              />
            </div>
            <div className="status-pick-div">
                <p>Status: </p>
                <span>All</span>
                <Icon
                  icon="ep:arrow-down"
                  width="16"
                  height="16"
                  style={{ color: "#667085" }}
                />
            </div>
          </div>
          <div className="new-table-scroll">
            <div className="table-div-con">
              <table className="custom-table">
              
                <tbody>
                  {CurrentItems ? (
                    CurrentItems.map((caseItem, index) => {
                         const park = JSON.parse(caseItem.park_info);
                      return (
                        <tr className="table-row"
                          key={caseItem.id}
           
                          style={{ cursor: "pointer", display:"flex", alignItems: "center", justifyContent: "space-between" }}
                        >
                        

                          <td >
                            <div className="parking-div">
                                <img src="/images/park.png" alt="" />
                                <div className="phantom">
                                    <h4>{park.name}</h4>
                                    <p>
                                        <span
                                            style={{color: getStatusColor(caseItem.status)}}
                                        >{caseItem.status}</span>
                                        {park.address}
                                    </p>
                                </div>
                            </div>
                          </td>
                          <td>₦{park.amount}</td>
                          {caseItem?.status === "cancelled" ? "You already cancelled" : caseItem?.status === "completed" ? "This transaction is completed" :
                          <div className="second-park-td">
                            <Link onClick={() => handleCancelBookParkSpace(caseItem?.id)} className="book-now">Cancel</Link>
                          </div>
                    }
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-case">
                        <img src="/images/mask_img.png" alt="" />
                        <h3>No Parking Space.</h3>
                       
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination Controls */}
          <div className="pagination-div">
            <Link
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="next-page-link"
            >
              <Icon className="pages-icon"
                icon="solar:alt-arrow-left-linear"
                width="16"
                height="16"
                style={{ color: "#667085" }}
              />
              
            </Link>
            <div>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <Link
                    className="paginations"
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    style={{
                      color: pageNumber === currentPage ? "#ffffff" : "#667085",
                      background: pageNumber === currentPage ? "#112240" : "#1122400D",
                    }}
                  >
                    {pageNumber}
                  </Link>
                )
              )}
            </div>
            <Link
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="next-page-link"
            >
            
              <Icon className="pages-icon"
                icon="iconamoon:arrow-right-2-light"
                width="16"
                height="16"
                style={{ color: "#667085" }}
              />
            </Link>
          </div>

        </div>
      </div>
      {cancelbookingsuccess ? (
                          <div className="dropdown-container">
                            <div className="cupon-drop">
                              <p>You have successfully cancelled the parking space</p>
                              <p>Thanks. </p>
                              <div className="button-div">
                                <button onClick={() => dispatch(resetCancelBookingState())} className="submit-btn">Continue</button>
                                
                              </div>
                            </div>
                          </div>
                        ): ""}
    </TaskRap>
  );
};
export default MyOutGoingParking;
