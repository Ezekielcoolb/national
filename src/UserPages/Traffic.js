import React, { useEffect } from "react";
import styled from "styled-components";
import MapRoad from "./Map";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';

import { useDispatch, useSelector } from "react-redux";
import { fetchExploreTrafficUpdates } from "../Redux/slices/secondUserSlice";

const TraficRap = styled.div`
font-family: 'Roboto';
width: 100%;

.center-tra {
    display: flex;
flex-direction: column;

align-items: center;
}
h2 {
    margin: 50px;
    margin-bottom: 20px !important;
    color: #112240;
    font-size: 18px;
    font-weight: 600;
}
  h5 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #1122401f;
    padding: 15px;
  }
  p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  h6 {
    max-width: 266px;
    color: #112240;
    font-size: 15 px;
    font-weight: 400;
  }
  .live-feed p {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 187px;
  }
  .live-feed span {
    font-size: 12px;
    color: #112240;
  }
  .inner-live-feed {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .all-traffic-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .all-traffic-info img {
    height: 100px;
    width: 200px;
    border-radius: 10px;
  }
  .all-traffic-info:hover {
    background: #f2f2f2;
  }
  .trafic-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .space-traffic {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
  .house-live-feed {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
  .update-btn {
    background: #112240;
    text-decoration: none;
    width: 55px;
    height: 22px;
    display: flex;
    color: #ffffff;
    font-size: 12px;
    border-radius: 16px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
  }
  .update-div {
    background: #f2f4f7;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px;
    border-radius: 16px;
  }
  .all-update-div {
    background: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
  }
  
  .all-traffic-update-divs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .all-traffic-information {
    display: flex;
    border: 1px solid #1122401F;
    border-radius: 10px;
    background: #ffffff;
  }
  .traffic-news {
    border-right: 1px solid #1122401f;
    width: 70%;
  }
  .live-feed {
    width: 30%;
  }
  .traffic-map {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  @media (max-width: 678px) {
.all-traffic-information, .update-div {
    flex-direction: column;

}
.traffic-news {
    border-right: 1px solid white !important;
    width: 100%;
  }
  .live-feed {
    width: 100%;
  }
  }
`;

const Traffic = () => {
       const navigate = useNavigate();
               const dispatch = useDispatch()

                  const {exploreTrafficData, loading, success, error} = useSelector((state) => state.otherUser);
         const { backgroundChange} = useSelector((state)=> state.app)
       
       console.log(exploreTrafficData);

       const traffics = exploreTrafficData?.data?.data

         useEffect(() => {
             dispatch(fetchExploreTrafficUpdates());
           }, [dispatch]);
       
                  const handleClick = (id) => {
    
        navigate(`/users/trafficDetails/${id}`);
      };
  return (
    <TraficRap>
       
        <h2  style={{ color: backgroundChange=== true ? "white" : "" }}>Traffic Updates</h2>
        <div className="center-tra">
      <div className="all-traffic-update-divs">
        <div className="map-plus-info">
          <div className="traffic-map">
            <MapRoad />
          </div>
          <div className="all-update-div">
            <div className="update-div">
              <Link className="update-btn">Update</Link>
              <p>Heavy traffic in alimosho around egebeda round-about... </p>
              <p>Small traffic in Ikeja Round-About...</p>
              <p>Road is free around 3rd mainland bridge... </p>
            </div>
          </div>
        </div>

        <div className="all-traffic-information">
          <div className="traffic-news">
            <h5>Traffic News</h5>
            <div className="space-traffic">
              {traffics?.map((items) => (
               <div onClick={() => handleClick(items.id)} className="all-traffic-info" key={items.id}>
                 <div className="trafic-info">
                   <p>{formatDistanceToNow(new Date(items.updated_at), { addSuffix: true })}</p>
                   <h6>{items?.title}</h6>
                 </div>
                 <img src={`https://backoffice.rua.com.ng/${items.banner}`} alt="" />
               </div>
             ))}
            </div>
          </div>
          <div className="live-feed">
            <h5>Live Feeds</h5>
            <div className="house-live-feed">
              <div className="inner-live-feed">
                <p>
                  <img src="/images/live-1.png" alt="" />
                  <span>Walex</span>. 2 min ago
                </p>
                <p>Lorem ipsum dolor sit amet consectetur. Tellus.</p>
              </div>
              <div className="inner-live-feed">
                <p>
                  <img src="/images/live-2.png" alt="" />
                  <span>Solomon</span>. 5 min ago
                </p>
                <p>Lorem ipsum dolor sit amet ctetur. Egestas augue lorem.</p>
              </div>
              <div className="inner-live-feed">
                <p>
                  <img src="/images/live-2.png" alt="" />
                  <span>Solomon</span>. 5 min ago
                </p>
                <p>Lorem ipsum dolor sit amet ctetur. Egestas augue lorem.</p>
              </div>
              <div className="inner-live-feed">
                <p>
                  <img src="/images/live-3.png" alt="" />
                  <span>Tommy</span>. 1 hour ago
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="inner-live-feed">
                <p>
                  <img src="/images/live-1.png" alt="" />
                  <span>Walex</span>. 2 min ago
                </p>
                <p>Lorem ipsum dolor sit amet consectetur. Tellus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </TraficRap>
  );
};
export default Traffic;
