import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetctMemberpage } from "../../Redux/slices/homeSlice";
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
const MemberRap = styled.div`
  .new-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 160px;

    background: url("../images/new-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
  .round-arrow {
    backdrop-filter: blur(5px);
    background: #ffffff33;
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
`;

const Members = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memberObject, loading, error } = useSelector(
    (state) => state.home || []
  );

  console.log(memberObject);

  useEffect(() => {
    dispatch(fetctMemberpage()); // Call API on component mount
  }, [dispatch]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const banner = memberObject?.data?.banner;
  const callToAction = memberObject?.data?.callToAction;
  const faqs = memberObject?.data?.faq;
  const members = memberObject?.data?.members;
  const partners = memberObject?.data?.partners;

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

  useEffect(() => {
    if (faqs?.faqs?.length > 0) {
      setActiveIndex(0);
    }
  }, [faqs]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const moveToLink = () => {
    if (banner?.first_btn_link) {
      window.open(banner.first_btn_link, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <MemberRap>
      <div>
        <div
          style={{
            height: "578px",
            background: "#eef5ff",
            position: "relative",
          }}
          className="flex gap-5 py-10 justify-between items-center membership"
        >
          <div className="flex flex-col gap-8 contains membership-div">
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "800",
                fontSize: "14px",
                color: "#56bf2a",
              }}
            >
              {banner?.title}
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: "700",
                fontSize: "45px",
                lineHeight: "55px",
                maxWidth: "469px",
                color: "#112240",
              }}
            >
              {banner?.sub_title}
            </h2>
            <p
              style={{
                fontSize: "Roboto",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#5c6a7f",
                maxWidth: "362px",
              }}
            >
              {banner?.content}
            </p>
            <button
              onClick={moveToLink}
              style={{ width: "220px", fontFamily: "Roboto" }}
              className="flex justify-around items-center"
            >
              <div>{banner?.first_btn_name}</div>
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
          <div
            className="membership-img contains"
            style={{
              width: "722px",
              height: "578px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src="./images/image_1.png"
              alt="..."
            />
          </div>
          <div className="new-dot"></div>
        </div>
        <div
          style={{ marginTop: "100px" }}
          className="containers  flex justify-between gap-10 items-center flex-wrap"
        >
          <div className="flex flex-col gap-7 ">
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: "14px",
                color: "#56bf2a",
              }}
            >
              {faqs?.heading?.title}
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque",
                fontSize: "45px",
                fontWeight: "700",
                lineHeight: "55px",
                color: "112240",
                maxWidth: "385px",
              }}
            >
              {faqs?.heading?.sub_title}
            </h2>
            <p
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#5c6a7f",
                maxWidth: "400px",
              }}
            >
              {faqs?.heading?.content}
            </p>
          </div>

          <div className="faqs" style={{ maxWidth: "560px" }}>
            {faqs?.faqs?.map((item, index) => (
              <div
                onClick={() => handleToggle(index)}
                style={{
                  cursor: "pointer",
                  borderBottom: "1px solid #E3E6EF",
                  paddingBottom: "15px",
                }}
              >
                <div className="flex items-center gap-2">
                  <div>
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
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#112240",
                    }}
                  >
                    {item?.question}
                  </p>
                </div>

                {activeIndex === index && (
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      maxWidth: "531px",
                      lineHeight: "24px",
                      color: "#5c6a7f",
                    }}
                  >
                    {item?.answer}
                  </p>
                )}
              </div>
            ))}
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

        {/* <div
          style={{
            marginTop: "100px",
            backgroundColor: "#1c4f96",
            color: "white",
            height: "565px",
            position: "relative",
          }}
          className="flex  justify-between member-div"
        >
          <div className="second-blue-dot"></div>
          <div className=" contains member-info flex flex-col gap-7 my-20 ">
            <p
              style={{
                fontFamily: "roboto",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              MEMBERS
            </p>
            <h2
              style={{
                maxWidth: "365px",
                fontFamily: "Bricolage Grotesque",
                fontWeight: "500",
                fontSize: "40px",
                lineHeight: "55px",
              }}
            >
              Our Members have influence
            </h2>
            <p
              className="member-p"
              style={{
                maxWidth: "377px",
                fontFamily: "roboto",
                fontSize: "16px",
                lineHeight: "24px",
                color: "",
              }}
            >
              Get issues put into policy debates and dialogues, engage with key
              private and public sector stakeholders. Shape the regulatory
              environment to increase the sector's efficiency and pperformance.
            </p>
            <div className="flex gap-7 mt-12">
              <div
                className="flex justify-center items-center round-arrow"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
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
                className="flex justify-center items-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "white",
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
          <div
            className="member-img"
            style={{
              width: "720px",
              height: "565px",
              padding: "0",
              margin: "0",
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
              src="./images/image_2.png"
              alt="..."
            />
          </div>
        </div> */}

        <div style={{ marginTop: "100px" }} className=" flex flex-col gap-12">
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
            {partners?.partnerList?.map((item, index) => (
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
                  src={`https://backoffice.rua.com.ng/${item.image}`}
                  alt="..."
                />
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
              {callToAction?.sub_title}
            </p>
            <div className="flex gap-4 join-btn">
              <button
                className="flex justify-between items-center gap-2"
                style={{
                  background: "#1c4f96",
                  width: "237px",
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
                  Become a Member{" "}
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
    </MemberRap>
  );
};
export default Members;
