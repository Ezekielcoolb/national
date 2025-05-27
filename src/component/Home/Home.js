import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchHomepage } from "../../Redux/slices/homeSlice";

const Wrapper = styled.div`
  margin-top: 100px;
  background-color: #1c4f96;
  color: white;
  height: 565px;
  display: flex;
  position: relative;
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 360px;
  margin-left: 125px;

  @media (max-width: 1200px) {
    margin-left: 70px !important;
  }
  @media (max-width: 992px) {
    margin-left: 100px !important;
  }
  @media (max-width: 576px) {
    margin-left: 40px !important;
  }
`;

const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

const Heading = styled.h2`
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 55px;
  max-width: 365px;
`;

const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  max-width: 377px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 48px;
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? "#ffffff" : "#ffffff33")};
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
  color: black;
  transition: background-color 0.3s ease;
`;

const SliderContainer = styled.div`
  width: 720px;
  height: 565px;
  overflow: hidden;
  flex-shrink: 0;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
`;

const Slide = styled.div`
  width: 720px;
  height: 565px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;


const HomeSection = styled.section`
  position: relative;
  background-image: url("../images/home-img-bg.jpg");
  background-size: 100% 100%;
  background-position: center;
  height: 700px; /* Full height */
  display: flex;
  padding-left: 125px;
  padding-top: 100px;
  align-items: center;
  //   justify-content: center;
  color: white;

  /* Dark overlay on the background */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  }

  /* Ensuring content sits above the dark overlay */
  .content {
    position: relative;
    z-index: 2;

    max-width: 570px;
  }

  h1 {
    font-size: 70px;
    font-weight: 700;
    line-height: 75px;
    font-family: Bricolage Grotesque;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 14px;
    font-weight: 800;
    font-family: Inter;
    margin-bottom: 25px;
  }

  .buttons {
    display: flex;
    gap: 15px;
    justify-content: flex-start;
  }

  .buttons-link {
    width: 183.19px;
    height: 55px;
    font-family: Inter;
    font-weight: 600;
    line-height: 19.36px;
    padding: 0.8rem 1.5rem;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;

    gap: 5px;
    background-color: #56bf2a; /* Green for Get Started */
    color: white;
  }
  .buttons-link-two {
    width: 183.19px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    line-height: 19.36px;
    padding: 0.8rem 1.5rem;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: transparent;
    color: white;
    border: 1px solid white;
  }

  .buttons-link:hover,
  .buttons-link-two:hover {
    opacity: 0.8;
  }
`;

const OtherSection = styled.div`
  font-family: Inter;

  .D-1 {
    background: linear-gradient(90deg, #f3f4f7 0%, rgba(254, 253, 253, 0) 100%);
    width: 48px;
    height: 48px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center; /* Correct typo here */
    color: #5c6a7f;
    font-size: 14px;
  }

  .influence {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    color: #112240;
    line-height: 21.6px;
    height: 183px;
    width: 370px;
    border-radius: 8px;
    border: 1px solid #e3e6ef;
    background: white;

    position: relative; /* Make sure influence is positioned relative */
    z-index: 2; /* Make sure it's above the .dots */
  }

  .dots {
    position: absolute;
    bottom: -100px; /* Adjust positioning to be underneath the content */
    left: 0;
    width: 100%;
    height: 170px;
    background: url("../images/dot-img.png");
    background-color: white;
    z-index: 1; /* Ensure it stays below the content */
  }

  .blue-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

    background: url("../images/blue_dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  .new-dot {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  .dot-now {
    position: absolute;
    top: -120px;
    width: 100%;
    height: 200px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }

  .second-blue-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 180px;
    background: url("../images/blue_dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }

  .sideCard {
    box-shadow: 0px 20px 100px 0px #0000001a;
    width: 180px;
    height: 197px;
    gap: 0px;
    border-radius: 5px 0px 0px 0px;
    opacity: 0px;
    position: absolute;
    bottom: 60px;
    left: -10px;
    z-index: 1;
    background: white;
  }
  .sideCard-2 {
    box-shadow: 0px 20px 100px 0px #0000001a;
    width: 180px;
    height: 197px;
    gap: 0px;
    border-radius: 5px 0px 0px 0px;
    opacity: 0px;
    position: absolute;
    bottom: 60px;
    right: -100px;
    z-index: 1;
    background: white;
  }
  .services-section {
    display: flex;
    justify-content: space-between;
    // padding: 40px;
    background-color: #0d4a88;
    color: white;
  }

  .services-info {
    max-width: 400px;
  }

  .services-info h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: #56bf2a;
  }

  .services-info h1 {
    font-size: 36px;
    margin: 10px 0;
  }

  .services-info p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .contact-btn {
    background-color: #56bf2a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }

  .services-section {
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;
    background-color: #0d4a88;
    color: white;
  }

  .services-info {
    max-width: 400px;
  }

  .services-info h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: #56bf2a;
  }

  .services-info h1 {
    font-size: 36px;
    margin: 10px 0;
  }

  .services-info p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .contact-btn {
    background-color: #56bf2a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }

  /* General styling for the services section */
  .services-section {
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    background-color: #1c4f96;
    color: white;
    gap: 20px; /* Adds space between .services-info and .image-section */
    overflow: hidden; /* Ensures that overflow is limited to the scroll area */
  }

  .services-info {
    max-width: 312px;
    flex-shrink: 0;
  }

  .services-info h3 {
    text-transform: uppercase;
    color: white;
  }

  .services-info h1 {
    max-width: 250px;
    font-size: 45px;
    font-weight: 700;
    font-family: Bricolage Grotesque;
  }

  .services-info p {
    font-size: 16px;
    line-height: 24px;
  }
  .image-overflow {
    overflow-x: auto;
  }
  .image-overflow::-webkit-scrollbar {
    width: 5px; /* Width of the vertical scrollbar */
    height: 7px; /* Height of the horizontal scrollbar */
  }

  /* The scrollbar track (background) */
  .image-overflow.image-overflow::-webkit-scrollbar-track {
    background: #1c4f96;
  }

  /* The draggable handle (thumb) */
  .image-overflow::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px; /* Rounded edges */
    border: 2px solid #1c4f96; /* Optional to create a padding effect */
  }

  /* Hover state of the thumb */
  .image-overflow::-webkit-scrollbar-thumb:hover {
    background-color: #f1f1f1;
  }
  /* Styling for the image section with two images */
  .image-section {
    display: flex;
    flex-grow: 1; /* Allows image-section to take up remaining space */
    overflow-x: auto !important;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    gap: 20px;
    width: fit-content;
    flex-shrink: 0;
    padding-bottom: 10px; /* Adds space at the bottom to avoid scrollbar overlap */
  }

  .image-overlay {
    position: relative;
    width: 371px; /* Adjust width as needed */
    height: 421px; /* Adjust height as needed */
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }

  .btn-hidden {
    display: none;
  }
  /* Gradient overlay on the images */
  .overlay-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      359.95deg,
      #021230 0.05%,
      rgba(2, 18, 48, 0) 113.96%
    );
  }

  /* Text content on the images */
  .text-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }

  .text-content h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    max-width: 188px;
  }
  .round-arrow {
    backdrop-filter: blur(5px);
    background: #ffffff33;
  }
  .slider-container {
    overflow: hidden;
    width: 720px;
    height: 565px;
    position: relative;
  }

  .slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }

  .slider-item {
    flex-shrink: 0;
    width: 720px;
    height: 565px;
  }

  .logic-shadow {
    box-shadow: 0px 15px 50px 0px #00000014;

    border-radius: 15px;
    overflow: hidden;
    margin: 5px;
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexTes, setCurrentIndexTes] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { homeObject, loading, error } = useSelector(
    (state) => state.home || []
  );

  const slider = homeObject?.data?.slider;
  const aboutUs = homeObject?.data?.aboutUs;
  const counterSection = homeObject?.data?.counterSection;
  const departments = homeObject?.data?.departments;
  const downloadAppSection = homeObject?.data?.downloapAppSection;
  const members = homeObject?.data?.members;
  const ourService = homeObject?.data?.ourService;
  const partners = homeObject?.data?.partners;
  const sectionNine = homeObject?.data?.sectionNine;
  const testimonials = homeObject?.data?.testimonials;
  const blog = homeObject?.data?.blog;
  const callToAction = homeObject?.data?.callToAction;
  const currentTestimony = testimonials?.testList[currentIndexTes];

  const rating = parseFloat(currentTestimony?.rate);
  const totalStars = 5;
  const safeRating = isNaN(rating) ? 0 : rating;
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;

  console.log(homeObject);
  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  useEffect(() => {
    if (counterSection?.counterFaq?.faqs?.length > 0) {
      setActiveIndex(0);
    }
  }, [counterSection]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const total = members?.memberList?.length || 0;
  const memberImages = members?.memberList || [];
  console.log(memberImages);

  const handleNext = () => {
    if (currentIndex < memberImages?.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNextTes = () => {
    setCurrentIndexTes(
      (prevIndex) => (prevIndex + 1) % testimonials?.testList?.length
    );
  };

  const handlePrevTes = () => {
    setCurrentIndexTes((prevIndex) =>
      prevIndex === 0 ? testimonials?.testList?.length - 1 : prevIndex - 1
    );
  };

  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }); // Output like: "May, 2025"
  };

  return (
    <div>
      <HomeSection>
        <div className="content homecontent">
          <p style={{ color: "white" }}>{slider?.title}</p>
          <h1 style={{ color: "white" }}>{slider?.sub_title}</h1>
          <div className="buttons btn">
            <Link to={`${slider?.second_btn_link}`} className="buttons-link">
              <div>{slider?.second_btn_name}</div>
              <div
                className="flex justify-center items-center"
                style={{
                  backgroundColor: "white",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              >
                <Icon
                  icon="weui:arrow-filled"
                  width="5.56"
                  height="14"
                  style={{ color: "#56bf2a" }}
                />
              </div>
            </Link>
            <Link className="buttons-link-two" to={`${slider?.first_btn_link}`}>
              {slider?.first_btn_name}
            </Link>
          </div>
        </div>
      </HomeSection>
      <OtherSection>
        <div className="">
          <div
            style={{
              width: "100vw",
              backgroundColor: "#1c4f96",
              color: "white",
              position: "relative",
            }}
          >
            <p className="py-14 text-center">
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {departments?.departmentsHeading?.title}{" "}
              </span>
            </p>

            <div className="flex containers justify-between gap-7">
              {departments?.departmentsList?.map((items) => (
                <div className="influence justify-center px-7">
                  <div className="flex justify-between items-center ">
                    <img
                      style={{
                        height: "34px",
                        width: "34px",
                        objectFit: "contain",
                        display: "block",
                        objectPosition: "top",
                      }}
                      src={`https://backoffice.rua.com.ng/${items?.image}`}
                      alt="..."
                    />
                    <div className="D-1 items-center">D1</div>
                  </div>
                  <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                    {items?.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="dots"></div>
          </div>
          <div className="containers">
            <div
              className="flex gap-4  justify-between items-center voice"
              style={{ marginTop: "100px", marginBottom: "100px" }}
            >
              <div className="img-voice-div" style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    color: "#112240",
                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                  className="sideCard flex flex-col justify-center items-center"
                >
                  <div
                    style={{
                      position: "relative",
                      background: "#56bf2a",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      top: "-45px", // Move it upwards by half of its height
                      left: "-30px", // Move it to the left by half of its width
                      zIndex: "-1",
                      marginBottom: "-50px",
                      transform: "translate(-10%, -15%)", // Ensures that half of the circle goes beyond the corner
                    }}
                  ></div>
                  <p
                    style={{
                      fontSize: "90px",
                      fontWeight: "700",
                      lineHeight: "80px",
                      marginTop: "-100px",
                    }}
                  >
                    {aboutUs?.years_of_exp}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "500",
                      lineHeight: "22px",
                      maxWidth: "102.48px",
                    }}
                  >
                    {aboutUs?.years_of_exp_title}
                  </p>
                </div>
                <div
                  className="voice-img"
                  style={{
                    marginLeft: "90px",
                    height: "558px",
                    width: "464px",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src={`https://backoffice.rua.com.ng/${aboutUs?.banner}`}
                    alt="..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 voice-div">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#56bf2a",
                    lineHeight: "16.94px",
                  }}
                >
                  {aboutUs?.title}
                </p>
                <h2
                  className=""
                  style={{
                    lineHeight: "55px",
                    color: "#112240",
                    fontWeight: "700",
                    fontFamily: "Bricolage Grotesque",
                    marginTop: "15px",
                    fontSize: "45px",
                    maxWidth: "453px",
                  }}
                >
                  {aboutUs?.sub_title}
                </h2>
                <p
                  style={{
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    maxWidth: "431px",
                  }}
                >
                  {aboutUs?.content}
                </p>
                <button className="flex justify-around items-center">
                  <div>Read More</div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center items-center "
            style={{ backgroundColor: "#eef5ff", height: "135.19px" }}
          >
            <div className="flex justify-center items-center gap-8 containers">
              <div
                style={{
                  borderTop: "4px solid #1c4f96",
                  width: "50.83px",
                  height: "4px",
                }}
              ></div>
              <p
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "24px",
                  textAlign: "center",
                  fontWeight: "500px",
                  color: "#112240",
                }}
              >
                {aboutUs?.bottom_title}
              </p>
              <div
                style={{
                  borderTop: "4px solid #1c4f96",
                  width: "50.83px",
                  height: "4px",
                }}
              ></div>
            </div>
          </div>

          <div style={{ backgroundColor: "#1c4f96", position: "relative" }}>
            <div className="blue-dot"></div>
            <div
              style={{ overflowX: "hidden" }}
              className="services-section gap-10 contains items-center "
            >
              {/* Left Section */}
              <div className="services-info flex flex-col gap-5">
                <h3>{ourService?.serviceHeading?.title}</h3>
                <h1>{ourService?.serviceHeading?.sub_title}</h1>
                <p>{ourService?.serviceHeading?.content}</p>
                <button className="flex justify-around items-center">
                  <div>Get in Touch</div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
              </div>

              {/* Right Section - Two Images with Gradient and Text */}
              <div className="image-overflow">
                <div
                  className="image-section"
                  style={{ display: "flex", width: "fit-content" }}
                >
                  {/* First Image */}
                  {ourService?.serviceList?.map((items) => (
                    <div
                      className="image-overlay"
                      style={{
                        backgroundImage: `url(https://backoffice.rua.com.ng/${items?.image})`,
                      }}
                    >
                      <div className="overlay-gradient"></div>
                      <div className="text-content px-5 gap-12 flex justify-between">
                        <h2>{items?.title}</h2>
                        <div
                          className="flex justify-center items-center round-arrow"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        >
                          <Icon
                            icon="solar:arrow-right-outline"
                            width="28"
                            height="28"
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{ paddingTop: "100px", gap: "20px" }}
              className=" flex stats justify-between items-center containers"
            >
              <div className="logic-shadow">
                <div className="flex logic-wrap">
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                      borderBottom: "1px solid #e3e6ef",
                    }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      {counterSection?.counters?.counter_one}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      {counterSection?.counters?.counter_one_title}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderBottom: "1px solid #e3e6ef",
                    }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      {counterSection?.counters?.counter_two}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      {counterSection?.counters?.counter_two_title}
                    </p>
                  </div>
                </div>
                <div className="flex logic-wrap">
                  <div
                    style={{
                      width: "290px",
                      height: "214px",
                      borderRight: "1px solid #e3e6ef",
                    }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      {counterSection?.counters?.counter_three}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      {counterSection?.counters?.counter_three_title}
                    </p>
                  </div>
                  <div
                    style={{ width: "290px", height: "214px" }}
                    className=" logic-box-1 flex flex-col justify-center items-center"
                  >
                    <p
                      style={{
                        textAlign: "center",
                        color: "#112240",
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "700",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      {counterSection?.counters?.counter_four}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#898d95",
                        lineHeight: "32px",
                      }}
                    >
                      {counterSection?.counters?.counter_four_title}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ Maxwidth: "493px" }}>
                <h2
                  style={{
                    maxWidth: "500px",
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: "700",
                    fontSize: "35px",
                    lineHeight: "55px",
                    color: "#112240",
                  }}
                >
                  {counterSection?.counterFaq?.heading?.title}
                </h2>

                {counterSection?.counterFaq?.faqs?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 py-4"
                    onClick={() => handleToggle(index)}
                    style={{
                      borderBottom: "1px solid #e3e6ef",
                      cursor: "pointer",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        style={{
                          fontWeight: "600",
                          fontSize: "19px",
                          lineHeight: "32px",
                          color: "#112240",
                        }}
                      >
                        {item?.question}
                      </h3>
                      <Icon
                        icon={
                          activeIndex === index
                            ? "ri:arrow-up-s-line"
                            : "ri:arrow-down-s-line"
                        }
                        width="16.3"
                        height="19"
                        style={{ color: "#112240", fontWeight: "900" }}
                      />
                    </div>

                    {activeIndex === index && (
                      <p style={{ maxWidth: "472px" }}>{item?.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Wrapper>
            <LeftSection>
              <Title>{members?.memberTitle?.title}</Title>
              <Heading>{members?.memberTitle?.sub_title}</Heading>
              <Description>{members?.memberTitle?.content}</Description>

              <ButtonRow>
                <NavButton
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  active={currentIndex > 0}
                >
                  <Icon
                    icon="mdi:arrow-left"
                    width="28"
                    height="28"
                    style={{ color: "black", zIndex: 10, position: "relative" }}
                  />
                </NavButton>
                <NavButton
                  onClick={handleNext}
                  disabled={currentIndex === memberImages.length - 1}
                  active={currentIndex < memberImages.length - 1}
                >
                  <Icon icon="mdi:arrow-right" width="28" height="28" />{" "}
                </NavButton>
              </ButtonRow>
            </LeftSection>

            <SliderContainer>
              <SliderTrack
                style={{ transform: `translateX(-${currentIndex * 720}px)` }}
              >
                {memberImages.map((item, index) => (
                  <Slide key={index}>
                    <img
                      src={`https://backoffice.rua.com.ng/${item.image}`}
                      alt={`slide-${index}`}
                    />
                  </Slide>
                ))}
              </SliderTrack>
            </SliderContainer>
          </Wrapper>

          <div style={{ marginTop: "100px" }} className="flex flex-col gap-12">
            <div
              style={{ textAlign: "center" }}
              className="flex flex-col justify-center items-center gap-5"
            >
              <h2
                style={{
                  color: "#112240",
                  fontFamily: "Bricolage Grotesque",
                  fontSize: "24px",
                  fontWeight: "600px",
                  lineHeight: "28.8px",
                }}
              >
                {partners?.partnerTitle?.title}
              </h2>
              <p
                style={{
                  color: "#5c6a7f",
                  fontFamily: "roboto",
                  fontSize: "16px",
                  lineHeight: "22.86px",
                  maxWidth: "555px",
                }}
              >
                {partners?.partnerTitle?.sub_title}
              </p>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-5">
              {partners?.partnerList?.map((items) => (
                <div
                  className="flex justify-center items-center"
                  style={{
                    backgroundColor: "white",
                    width: "278pxx",
                    height: "144px",
                    borderRadius: "6px",
                    border: "1px solid #e3e6ef",
                  }}
                >
                  <img
                    className="my-10 mx-12 global-img"
                    style={{
                      height: "64px",
                      width: "181px",
                      objectFit: "",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src={`https://backoffice.rua.com.ng/${items.image}`}
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: "100px",
              backgroundColor: "#eef5ff",
              position: "relative",
            }}
          >
            <div className="new-dot"></div>
            <div className="containers flex flex-col gap-12 py-20 pt-32">
              <div className="flex justify-between gap-5 items-center flex-wrap">
                <div className="flex flex-col gap-3">
                  <p
                    style={{
                      color: "#56bf2a",
                      fontSize: "14px",
                      fontWeight: "800",
                      fontFamily: "roboto",
                    }}
                  >
                    {testimonials?.testTitle?.title}
                  </p>
                  <h2
                    style={{
                      color: "#112240",
                      fontWeight: "700",
                      fontSize: "45px",
                      fontFamily: "Bricolage Grotesque",
                      lineHeight: "55px",
                      maxWidth: "350px",
                    }}
                  >
                    {testimonials?.testTitle?.sub_title}
                  </h2>
                </div>
                <div
                  style={{ fontFamily: "roboto", width: "382px" }}
                  className="testy-p"
                >
                  <p
                    style={{
                      color: "#5c6a7f",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {testimonials?.testTitle?.content}
                  </p>
                </div>
              </div>
              <div
                className="flex gap-5 pr-5 justify-between items-center testimonial-img-div"
                style={{
                  backgroundColor: "white",
                  height: "359px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="testi-img"
                  style={{
                    width: "392px",
                    height: "359px",
                    borderRadius: "10px 0 10px 0",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src={`https://backoffice.rua.com.ng/${currentTestimony?.image}`}
                    alt="..."
                  />
                </div>
                <div className="flex flex-col gap-6 testimonial-img-p">
                  <p
                    style={{
                      color: "#112240",
                      fontSize: "20px",
                      fontFamily: "roboto",
                      lineHeight: "30px",
                      width: "580px",
                    }}
                  >
                    {currentTestimony?.testimony}
                  </p>
                  <div className="flex justify-between items-center">
                    <div
                      className="flex flex-col gap-"
                      style={{ fontFamily: "roboto" }}
                    >
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "#5c6a7f",
                        }}
                      >
                        {currentTestimony?.title}
                      </p>
                      <p
                        style={{
                          fontWeight: "800",
                          fontSize: "20px",
                          color: "#112240",
                        }}
                      >
                        {currentTestimony?.full_name}
                      </p>
                      <p
                        className="flex gap-1 mt-2"
                        style={{ color: "#e0a416", fontWeight: "900" }}
                      >
                        {[...Array(fullStars)].map((_, i) => (
                          <Icon
                            key={`full-${i}`}
                            icon="material-symbols:star"
                            width="17.27"
                            height="15"
                          />
                        ))}
                        {hasHalfStar && (
                          <Icon
                            key="half-star"
                            icon="material-symbols:star-half"
                            width="17.27"
                            height="15"
                          />
                        )}
                        {[
                          ...Array(
                            Math.max(
                              0,
                              totalStars - fullStars - (hasHalfStar ? 1 : 0)
                            )
                          ),
                        ].map((_, i) => (
                          <Icon
                            key={`empty-${i}`}
                            icon="material-symbols:star-outline"
                            width="17.27"
                            height="15"
                          />
                        ))}
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-7 ">
                        <div
                          onClick={handlePrevTes}
                          className="flex justify-center items-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "#1c4f964d",
                          }}
                        >
                          <Icon
                            icon="solar:arrow-left-outline"
                            width="28"
                            height="28"
                            style={{ color: "black" }}
                          />
                        </div>
                        <div
                          onClick={handleNextTes}
                          className="flex justify-center items-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "#1c4f96",
                          }}
                        >
                          <Icon
                            icon="solar:arrow-right-outline"
                            width="28"
                            height="28"
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containers">
            <div
              className="flex gap-10 flex-row-reverse  justify-between items-center voice"
              style={{ marginTop: "100px", marginBottom: "100px" }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    color: "#112240",
                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                  className="sideCard-2 flex flex-col justify-center items-center"
                >
                  <div
                    style={{
                      position: "relative",
                      background: "#56bf2a",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      top: "-45px", // Move it upwards by half of its height
                      left: "-40px", // Move it to the left by half of its width
                      zIndex: "-1",
                      marginBottom: "-50px",
                      transform: "translate(-10%, -15%)", // Ensures that half of the circle goes beyond the corner
                    }}
                  ></div>

                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      fontFamily: "Bricolage Grotesque",
                      lineHeight: "24px",
                      maxWidth: "130px",
                      marginTop: "-75px",
                    }}
                  >
                    {sectionNine?.image_writeup}
                  </p>
                </div>
                <div
                  className="voice-img"
                  style={{ height: "558px", width: "464px" }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src={`https://backoffice.rua.com.ng/${sectionNine?.banner}`}
                    alt="..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 voice-div">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#56bf2a",
                    lineHeight: "16.94px",
                  }}
                >
                  {sectionNine?.title}
                </p>
                <h2
                  className=""
                  style={{
                    lineHeight: "55px",
                    color: "#112240",
                    fontWeight: "700",
                    fontFamily: "Bricolage Grotesque",
                    marginTop: "15px",
                    fontSize: "45px",
                    maxWidth: "453px",
                  }}
                >
                  {sectionNine?.sub_title}
                </h2>
                <p
                  style={{
                    lineHeight: "24px",
                    color: "#5c6a7f",
                    maxWidth: "431px",
                  }}
                >
                  {sectionNine?.content}
                </p>
                <button className="flex justify-around items-center">
                  <div>Read More</div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            className="road "
            style={{
              height: "745px",
              backgroundColor: "#1c4f96",
              color: "white",
              position: "relative",
            }}
          >
            <div className="contains road-div flex justify-between items-center mr-10  my-20">
              <div className="road-div-1 flex flex-col gap-8 ">
                <h2
                  style={{
                    fontFamily: "Bricolage Grotesque",
                    fontSize: "38px",
                    lineHeight: "48px",
                    fontWeight: "800",
                    maxWidth: "480px",
                  }}
                >
                  {downloadAppSection?.title}
                </h2>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "26px",
                    width: "445px",
                  }}
                >
                  {downloadAppSection?.content}
                </p>
                <div className="flex flex-col gap-6">
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Visit Help Center
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Contact Support
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Webinars
                  </p>
                  <p
                    className="text-white text-[16px] leading-[26px] font-inter underline"
                    style={{
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Blog
                  </p>
                </div>

                <div
                  style={{ marginTop: "40px" }}
                  className="flex flex-wrap gap-8"
                >
                  <button
                    style={{ width: "auto", cursor: "pointer" }}
                    className="flex justify-around gap-3  items-center"
                  >
                    <div style={{ fontSize: "15px" }}>Create Account</div>
                    <div
                      className="flex justify-center items-center"
                      style={{
                        backgroundColor: "white",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon
                        icon="weui:arrow-filled"
                        width="5.56"
                        height="14"
                        style={{ color: "#56bf2a" }}
                      />
                    </div>
                  </button>
                  <button
                    style={{
                      fontSize: "15px",
                      background: "transparent",
                      border: "1px solid white",
                      cursor: "pointer",
                    }}
                  >
                    Download App
                  </button>
                </div>
              </div>
              <div
                className="road-img"
                style={{
                  width: "558px",
                  height: "683px",
                  marginTop: "40px",
                  marginBottom: "40px",
                  borderRadius: "22px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    borderRadius: "22px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    objectPosition: "top",
                  }}
                  src={`https://backoffice.rua.com.ng/${downloadAppSection?.banner}`}
                  alt="..."
                />
              </div>
            </div>
            <div className="second-blue-dot"></div>
          </div>
          <div style={{ marginTop: "100px" }}>
            <p
              style={{
                fontWeight: "800",
                fontSize: "14px",
                lineHeight: "16.8px",
                textAlign: "center",
                color: "#56bf2a",
                fontFamily: "Manrope",
                marginBottom: "15px",
              }}
            >
              {blog?.blogHeading?.title}
            </p>
            <h2
              className="latest"
              style={{
                fontSize: "45px",
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "Bricolage Grotesque",
                lineHeight: "55px",
                color: "#051a53",
                marginBottom: "70px",
              }}
            >
              {blog?.blogHeading?.description}
            </h2>
            <div className=" flex flex-wrap justify-center items-center gap-3">
              {blog?.blogList?.map((items) => (
                <div
                  style={{
                    width: "370px",
                    height: "560.88px",
                    border: " 1px solid #E3E6EF",
                    borderRadius: "15px",
                    background: "#FFFFFF01",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      width: "80px",
                      height: "89px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        width: "80px",
                        height: "62px",
                        background: "#1c4f96",
                        color: "#FFFFFF",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "800",
                          fontSize: "30px",
                          textAlign: "center",
                        }}
                      >
                        {new Date(items?.updated_at).getDate()}
                      </p>
                    </div>
                    <div
                      style={{ background: "#FFFFFF" }}
                      className="flex justify-center items-center"
                    >
                      <p
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: "600",
                          fontSize: "11px",
                        }}
                      >
                        {formatMonthYear(items?.updated_at)}
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "370px", height: "320px" }}>
                    <img
                      style={{
                        height: "100%",
                        borderRadius: "15px 15px 0px 0px",
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        objectPosition: "top",
                      }}
                      src={`https://backoffice.rua.com.ng/${items?.banner}`}
                      alt="..."
                    />
                  </div>
                  <div className="flex flex-col gap-5 m-6">
                    <div
                      className="flex gap-5"
                      style={{
                        fontSize: "14px",
                        color: "#5c6a7f",
                        fontFamily: "Roboto",
                      }}
                    >
                      <p>{items?.author}</p>
                      <p className="flex gap-2">
                        {" "}
                        <Icon
                          icon="uil:comments"
                          width="16.13"
                          height="14"
                          style={{ fontWeight: "900", color: "#1c4f96" }}
                        />{" "}
                        0 Comments
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        color: "#112240",
                      }}
                    >
                      {items?.title}
                    </p>
                    <button
                      className="flex justify-between items-center"
                      style={{
                        background: "transparent",
                        width: "300px",
                        height: "50px",
                        border: "1px solid #E3E6EF",
                        borderRadius: "100px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "19.6px",
                          fontWeight: "500",
                          color: "#56bf2a",
                        }}
                      >
                        View Post
                      </p>
                      <Icon
                        icon="formkit:arrowright"
                        width="18.97"
                        height="8.8"
                        style={{ color: "#56bf2a" }}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            style={{
              height: "357px",
              background: "#eef5ff",
              marginTop: "220px",
              position: "relative",
            }}
          >
            <div className="dot-now"></div>
            <div
              className="flex flex-col justify-center items-center gap-6"
              style={{
                color: "white",
                background: "#56bf2a",
                width: "1170px",
                height: "367px",
                borderRadius: "12px",
                position: "absolute",
                top: "-120px",
              }}
            >
              <h2
                className="join-div-h2"
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: "600",
                  fontSize: "50px",
                  width: "412px",
                  lineHeight: "54.57px",
                  textAlign: "center",
                }}
              >
                {callToAction?.title}
              </h2>
              <p
                style={{
                  width: "412px",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  lineHeight: "26px",
                  textAlign: "center",
                }}
              >
                {callToAction?.content}
              </p>
              <div className="flex gap-4 join-btn">
                <button
                  className="flex justify-between items-center gap-2"
                  style={{
                    background: "#1c4f96",
                    width: "200px",
                    height: "55px",
                    borderRadius: "700px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Get Started{" "}
                  </p>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      backgroundColor: "white",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon
                      icon="weui:arrow-filled"
                      width="5.56"
                      height="14"
                      style={{ color: "#56bf2a" }}
                    />
                  </div>
                </button>
                <button
                  style={{
                    color: "#56bf2a",
                    background: "white",
                    width: "200px",
                    height: "55px",
                    borderRadius: "700px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Get in Touch{" "}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </OtherSection>
    </div>
  );
};

export default Home;
