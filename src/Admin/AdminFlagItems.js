import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { adminListOfComplain, fetchAdminFlagedItems } from "../Redux/slices/adminSlice";

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

const AdminFlagItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
        const { flagItemData, currentPage, totalPages, loading, error } = useSelector((state) => state.admin);
        const [page, setPage] = useState(1);
        console.log(flagItemData);
    
        const rides = flagItemData?.data?.data
  
        
    
  useEffect(() => {
    dispatch(fetchAdminFlagedItems({ page }));
  }, [dispatch, page]);


 
  const handleRowClick = (id) => {
    navigate(`/admin/flagedItems/details/${id}`);
  };
  //   pagination

  

  const getStatusColor = (status) => {
    if (status === "ongoing") return "#E8A526";
    if (status === "completed") return "#379C0C";
    return "#112240"; // Default color if priority is missing or unrecognized
  };
  const getStatusBackground = (status) => {
    if (status === "ongoing") return "#FDF4E4";
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
                  </tr>
                </thead>
                <tbody>
                  {rides ? (
                    rides?.map((caseItem, index) => {
                      return (
                        <tr
                          className="table-row"
                          key={caseItem.id}
                          onClick={() => handleRowClick(caseItem.id)}
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
                        <h3>No Item lodged.</h3>
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
              className="next-page-link"
              onClick={() => setPage((p) => p - 1)}
              style={{ pointerEvents: page === 1 ? "none" : "auto", opacity: page === 1 ? 0.5 : 1 }}
            >
              Previous
            </Link>
          
            <span className="paginations"
          
              style={{
                color: page === currentPage ? "#ffffff" : "#667085",
                background: page === currentPage ? "#112240" : "#1122400D",
               
              }}
            >
              {page} 
            </span>
          
            <Link
              className="next-page-link"
              onClick={() => setPage((p) => p + 1)}
              style={{ pointerEvents: page === totalPages ? "none" : "auto", opacity: page === totalPages ? 0.5 : 1 }}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </TaskRap>
  );
};
export default AdminFlagItem;
