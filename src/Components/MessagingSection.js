import React from "react";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import avatar4 from "../img/avatar4.svg";
import avatar5 from "../img/avatar5.svg";
import messaging from "../img/conversation.svg";
import bgCircles from "../img/circleBg.svg";
function MessagingSection() {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">
              Marketing Support & Software Support Happy Clients
            </h2>
            <p className="m-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              distinctio vel, quod repellendus enim exercitationem ullam quas
              facere sapiente esse incidunt, odio laborum?
            </p>
            <div className="images-con">
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>&nbsp; +25</p>
            </div>
            <img src={bgCircles} className="bgCircle" alt="" />
          </div>
          <div className="right-items">
            <img src={messaging} alt="" />
            {/* <img src={bgCircles} alt="" className="bgCircle" /> */}
          </div>
        </div>
        <Content>
          <div className="sort1">
            <Icon>
              <i class="icofont-card"></i>
            </Icon>
            <PlanTitle>Billing Software</PlanTitle>
          </div>
          <div className="sort1">
            <Icon>
              <i class="icofont-man-in-glasses"></i>
            </Icon>
            <PlanTitle>Customer Data</PlanTitle>
          </div>
          <div className="sort1">
            <Icon>
              <i class="icofont-users"></i>
            </Icon>
            <PlanTitle>Stock Management</PlanTitle>
          </div>
          <div className="sort1">
            <Icon>
              <i class="icofont-shopping-cart"></i>
            </Icon>
            <PlanTitle>Purchase Details</PlanTitle>
          </div>
        </Content>
      </InnerLayout>
    </MessageStyle>
  );
}

const MessageStyle = styled.section`
  .message-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .left-items {
    position: relative;
    padding-right: 2rem;
    .m-para {
      padding: 1rem 0;
    }
    .images-con {
      display: flex;
      align-items: center;
      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -22px;
      }
    }
    .bgCircle {
      position: absolute;
      top: -7%;
      left: -10%;
      z-index: -1;
    }
  }
  .right-items {
    position: relative;
    img {
      padding-left: 2rem;
    }
    .bgCircle {
      position: absolute;
      bottom: -7%;
      right: 0;
      z-index: -1;
    }
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 50px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  font-size: 40px;
  color: #99ff33;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.5);
`;
export const PlanTitle = styled.div`
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color: #99ff33;
  font-size: 30px;
`;


export default MessagingSection;
