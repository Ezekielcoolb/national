import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHomepage,
  fetctGeneralSetting,
} from "../../Redux/slices/homeSlice";

const FooterRap = styled.div`
  background: #1c4f96;
  color: white;
  bottom: 0;
  position: relative;
  .footer-1 {
    border-bottom: 1px solid #ffffff1a;
  }
  .foot-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;

    background: url("../images/footer-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

const Footer = () => {
  const dispatch = useDispatch();
  const { generalObject, homeObject, loading, error } = useSelector(
    (state) => state.home || []
  );
  const currentYear = new Date().getFullYear();

  const ourService = homeObject?.data?.ourService;

  const websetting = generalObject?.data?.websetting;
  const socialLinks = generalObject?.data?.socailLinks;
  console.log(ourService);
  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetctGeneralSetting()); // Call API on component mount
  }, [dispatch]);
  return (
    <FooterRap>
      <div className="containers py-12">
        <div className="flex justify-between pb-8 gap-5  items-center flex-wrap footer-1">
          <Link to="/">
            <img
              style={{
                height: "92.62px",
                width: "218.06px", // Set a fixed width to prevent squeezing
                objectFit: "contain",
                display: "block",
                objectPosition: "top",
              }}
              src={`https://backoffice.rua.com.ng/${websetting?.logo_two}`}
              alt="..."
            />
          </Link>
          <div className="flex gap-5 justify-between items-center">
            {socialLinks?.map((items) => (
              <Link to={`${items?.social_url}`}>
                <img
                  src={`https://backoffice.rua.com.ng/${items?.link_image}`}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
        <div
          className=" flex flex-wrap gap-5 justify-between py-10 "
          style={{ fontFamily: "Roboto", fontSize: "16px" }}
        >
          <div style={{ lineHeight: "24px", width: "242px" }}>
            <p>{websetting?.site_description}</p>
          </div>
          <div
            className=" flex flex-col gap-4 "
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
              Explore
            </p>
            <Link to="/about">About Us</Link>
            <Link to="/members">Membership</Link>
            <Link to="/news&events">News & Media</Link>
                         <Link to="/privacy-policy">Privacy Policy</Link>
<Link to="/terms-condition">Terms & Conditions</Link>
            <Link to="/contact">Contact</Link>
           
          </div>
          <div
            className=" flex flex-col gap-4 "
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
              Services
            </p>
            {ourService?.serviceList?.map((item) => (
              <p>{item.title}</p>
            ))}
          </div>
          <div
            className=" flex flex-col gap-4 "
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
              Contact
            </p>
            <p className="flex gap-2 items-center">
              <Icon
                icon="mdi:email-open-outline"
                width="13"
                height="13"
                style={{ color: "#FFFFFF8C" }}
              />
              {websetting?.biz_email}, <br /> {websetting?.biz_email_two}
            </p>
            <p className="flex gap-2 items-center">
              <Icon
                icon="fluent:call-24-filled"
                width="13"
                height="13"
                style={{ color: "#FFFFFF8C" }}
              />
              {websetting?.biz_phone}, {websetting?.biz_phone_two}
            </p>
            <p className="flex gap-2 items-center">
              <Icon
                icon="material-symbols:add-location-alt-outline-rounded"
                width="13"
                height="13"
                style={{ color: "#FFFFFF8C" }}
              />
              {websetting?.first_address}
            </p>
          </div>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            marginTop: "70px",
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#FFFFFF80",
          }}
        >
          <p style={{ textAlign: "center" }}>
            © {currentYear} {websetting?.site_name}. All rights reserved
          </p>
        </div>
      </div>
      <div className="foot-dot"></div>
    </FooterRap>
  );
};

export default Footer;
