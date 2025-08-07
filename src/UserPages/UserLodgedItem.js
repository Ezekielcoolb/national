import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchLodgedItemUser, fetchMyComplains } from "../Redux/slices/secondUserSlice";

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
`;

const UserLodgedItem = () => {
     const dispatch = useDispatch()
        const { lodgedItemUser, loading, success, error } = useSelector((state) => state.otherUser);
      console.log(lodgedItemUser);
      
  const navigate = useNavigate();
  const complains = lodgedItemUser?.data?.data
  const handleRowClick = (id) => {
    navigate(`/users/itemDetails/${id}`);
  };
  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination Logic
  const totalPages = Math.ceil(complains?.length / rowsPerPage);
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const CurrentComplains = complains?.slice(indexOfFirstCase, indexOfLastCase);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  useEffect(() => {
      dispatch(fetchLodgedItemUser());
    }, [dispatch]);

  const getStatusColor = (status) => {
    if (status === "active") return "#E8A526";
    if (status === "completed") return "#379C0C";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
  const getStatusBackground = (status) => {
    if (status === "active") return "#FDF4E4";
    if (status === "completed") return "#E8FDE0";
    return "#112240"; // Default color if priority is missing or unrecognized
  };

  return (
    <TaskRap>
      <div>
        <div className="table-container ">
          <div className="logger-header">
            <div className="search-divs">
              <input type="text" placeholder="search complain..." />
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
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>S/N</th>
<th>ITEM ID</th>
                     <th>ITEM</th>
                    <th>BIKE NUMBER</th>
                    <th>RIDER NUMBER</th>
                    <th>RIDER COMPANY</th>
                    <th>DESTINATION</th>
                    {/* <th>STATUS</th> */}
                  </tr>
                </thead>
                <tbody>
                  {CurrentComplains ? (
                    CurrentComplains.map((caseItem, index) => {
                      return (
                        <tr
                          className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem?.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{index + 1}</td>
                           <td>{caseItem.item_ref}</td>
        <td>{caseItem.item_name}</td>
                          <td>{caseItem.vehicle_bike_number}</td>
                           <td>{caseItem.rider_phone_number}</td>
                            <td>{caseItem.rider_company}</td>
                          
                          <td>{caseItem?.destination_address?.split(' ').slice(0, 5).join(' ')}{caseItem?.destination_address?.split(' ')?.length > 5 ? '...' : ''}</td>
                         
                   
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-case">
                        <img src="/images/mask_img.png" alt="" />
                        <h3>No Complain lodged.</h3>
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
              <Icon
                className="pages-icon"
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
                      background:
                        pageNumber === currentPage ? "#112240" : "#1122400D",
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
              <Icon
                className="pages-icon"
                icon="iconamoon:arrow-right-2-light"
                width="16"
                height="16"
                style={{ color: "#667085" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </TaskRap>
  );
};
export default UserLodgedItem;
